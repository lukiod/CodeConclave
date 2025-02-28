// server/controllers/projects.js
const { Project, File } = require('../models/Project');
const User = require('../models/User');
const mongoose = require('mongoose');
const logger = require('../config/logger');

// Get all projects for the current user
exports.getProjects = async (req, res) => {
  try {
    // Find projects where user is owner or a collaborator
    const projects = await Project.find({
      $or: [
        { owner: req.user.id },
        { 'collaborators.user': req.user.id }
      ]
    }).populate('owner', 'username email');

    res.json(projects);
  } catch (error) {
    logger.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single project by ID
exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('owner', 'username email')
      .populate('collaborators.user', 'username email');

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Check if user has access to this project
    if (
      project.owner._id.toString() !== req.user.id &&
      !project.collaborators.some(c => c.user._id.toString() === req.user.id) &&
      !project.isPublic
    ) {
      return res.status(403).json({ message: 'Access denied' });
    }

    res.json(project);
  } catch (error) {
    logger.error(`Error fetching project ${req.params.id}:`, error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { name, description, isPublic } = req.body;

    const project = new Project({
      name,
      description,
      owner: req.user.id,
      isPublic: isPublic || false
    });

    await project.save();

    // Add project to user's projects
    await User.findByIdAndUpdate(req.user.id, {
      $push: { projects: project._id }
    });

    res.status(201).json(project);
  } catch (error) {
    logger.error('Error creating project:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a project
exports.updateProject = async (req, res) => {
  try {
    const { name, description, isPublic } = req.body;

    // Check if project exists
    let project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Check if user is the owner or an admin collaborator
    if (
      project.owner.toString() !== req.user.id &&
      !project.collaborators.some(c => 
        c.user.toString() === req.user.id && c.role === 'admin'
      )
    ) {
      return res.status(403).json({ message: 'Access denied' });
    }

    // Update project
    project = await Project.findByIdAndUpdate(
      req.params.id,
      { name, description, isPublic },
      { new: true }
    );

    res.json(project);
  } catch (error) {
    logger.error(`Error updating project ${req.params.id}:`, error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a project
exports.deleteProject = async (req, res) => {
  try {
    // Check if project exists
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Check if user is the owner
    if (project.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }

    // Start a transaction
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      // Delete all files associated with the project
      await File.deleteMany({ _id: { $in: project.files } });

      // Remove project from user's projects
      await User.findByIdAndUpdate(req.user.id, {
        $pull: { projects: project._id }
      });

      // Delete the project
      await Project.findByIdAndDelete(req.params.id);

      // Commit the transaction
      await session.commitTransaction();
      session.endSession();

      res.json({ message: 'Project deleted successfully' });
    } catch (error) {
      // Abort transaction if error occurs
      await session.abortTransaction();
      session.endSession();
      throw error;
    }
  } catch (error) {
    logger.error(`Error deleting project ${req.params.id}:`, error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Share a project with another user
exports.shareProject = async (req, res) => {
  try {
    const { email, role } = req.body;

    // Validate role
    if (!['viewer', 'editor', 'admin'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if project exists
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Check if user is the owner or an admin collaborator
    if (
      project.owner.toString() !== req.user.id &&
      !project.collaborators.some(c => 
        c.user.toString() === req.user.id && c.role === 'admin'
      )
    ) {
      return res.status(403).json({ message: 'Access denied' });
    }

    // Check if user is already a collaborator
    const existingCollaborator = project.collaborators.find(
      c => c.user.toString() === user._id.toString()
    );

    if (existingCollaborator) {
      // Update existing collaborator's role
      project.collaborators = project.collaborators.map(c => 
        c.user.toString() === user._id.toString() ? { user: user._id, role } : c
      );
    } else {
      // Add new collaborator
      project.collaborators.push({ user: user._id, role });
    }

    await project.save();

    res.json(project);
  } catch (error) {
    logger.error(`Error sharing project ${req.params.id}:`, error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Remove a collaborator from a project
exports.removeCollaborator = async (req, res) => {
  try {
    const { userId } = req.params;

    // Check if project exists
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Check if user is the owner or an admin collaborator
    if (
      project.owner.toString() !== req.user.id &&
      !project.collaborators.some(c => 
        c.user.toString() === req.user.id && c.role === 'admin'
      )
    ) {
      return res.status(403).json({ message: 'Access denied' });
    }

    // Remove collaborator
    project.collaborators = project.collaborators.filter(
      c => c.user.toString() !== userId
    );

    await project.save();

    res.json(project);
  } catch (error) {
    logger.error(`Error removing collaborator from project ${req.params.id}:`, error);
    res.status(500).json({ message: 'Server error' });
  }
};