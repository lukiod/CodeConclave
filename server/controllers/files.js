// server/controllers/files.js
const { Project, File } = require('../models/Project');
const logger = require('../config/logger');
const mongoose = require('mongoose');

// Get all files for a project
exports.getProjectFiles = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    
    // Check if project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    // Check if user has access to this project
    if (
      project.owner.toString() !== req.user.id &&
      !project.collaborators.some(c => c.user.toString() === req.user.id) &&
      !project.isPublic
    ) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    // Get all files for this project
    const files = await File.find({ _id: { $in: project.files } });
    
    res.json(files);
  } catch (error) {
    logger.error(`Error fetching files for project ${req.params.projectId}:`, error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a specific file
exports.getFile = async (req, res) => {
  try {
    const { projectId, fileId } = req.params;
    
    // Check if project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    // Check if user has access to this project
    if (
      project.owner.toString() !== req.user.id &&
      !project.collaborators.some(c => c.user.toString() === req.user.id) &&
      !project.isPublic
    ) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    // Check if file exists and belongs to the project
    if (!project.files.includes(fileId)) {
      return res.status(404).json({ message: 'File not found in this project' });
    }
    
    const file = await File.findById(fileId);
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }
    
    res.json(file);
  } catch (error) {
    logger.error(`Error fetching file ${req.params.fileId}:`, error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new file
exports.createFile = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { name, type, extension, content, parentId } = req.body;
    
    // Validate input
    if (!name || !type) {
      return res.status(400).json({ message: 'Name and type are required' });
    }
    
    if (type === 'file' && !extension) {
      return res.status(400).json({ message: 'Extension is required for files' });
    }
    
    // Check if project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    // Check if user has write access to this project
    if (
      project.owner.toString() !== req.user.id &&
      !project.collaborators.some(c => 
        c.user.toString() === req.user.id && ['editor', 'admin'].includes(c.role)
      )
    ) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    // Check if parent folder exists if parentId is provided
    if (parentId) {
      const parentFolder = await File.findById(parentId);
      if (!parentFolder || parentFolder.type !== 'directory') {
        return res.status(400).json({ message: 'Invalid parent folder' });
      }
      
      // Check if parent folder belongs to this project
      if (!project.files.includes(parentId)) {
        return res.status(400).json({ message: 'Parent folder does not belong to this project' });
      }
    }
    
    // Check if a file with the same name already exists in the same directory
    const existingFile = await File.findOne({
      name,
      extension: type === 'file' ? extension : '',
      parentId: parentId || null,
      _id: { $in: project.files }
    });
    
    if (existingFile) {
      return res.status(400).json({ message: 'A file with this name already exists in this directory' });
    }
    
    // Create the file
    const newFile = new File({
      name,
      type,
      extension: type === 'file' ? extension : '',
      content: type === 'file' ? content || '' : '',
      parentId: parentId || null
    });
    
    // Start a transaction
    const session = await mongoose.startSession();
    session.startTransaction();
    
    try {
      // Save the file
      await newFile.save({ session });
      
      // Add file to project
      project.files.push(newFile._id);
      await project.save({ session });
      
      // If it's a directory, add to parent's children
      if (parentId) {
        await File.findByIdAndUpdate(
          parentId,
          { $push: { children: newFile._id } },
          { session }
        );
      }
      
      // Commit the transaction
      await session.commitTransaction();
      session.endSession();
      
      res.status(201).json(newFile);
    } catch (error) {
      // Abort transaction if error occurs
      await session.abortTransaction();
      session.endSession();
      throw error;
    }
  } catch (error) {
    logger.error(`Error creating file in project ${req.params.projectId}:`, error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update file content
exports.updateFileContent = async (req, res) => {
  try {
    const { projectId, fileId } = req.params;
    const { content } = req.body;
    
    // Check if content is provided
    if (content === undefined) {
      return res.status(400).json({ message: 'Content is required' });
    }
    
    // Check if project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    // Check if user has write access to this project
    if (
      project.owner.toString() !== req.user.id &&
      !project.collaborators.some(c => 
        c.user.toString() === req.user.id && ['editor', 'admin'].includes(c.role)
      )
    ) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    // Check if file exists and belongs to the project
    if (!project.files.includes(fileId)) {
      return res.status(404).json({ message: 'File not found in this project' });
    }
    
    const file = await File.findById(fileId);
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }
    
    // Check if file is a directory
    if (file.type !== 'file') {
      return res.status(400).json({ message: 'Cannot update content of a directory' });
    }
    
    // Update file content
    file.content = content;
    file.updatedAt = Date.now();
    await file.save();
    
    res.json(file);
  } catch (error) {
    logger.error(`Error updating file ${req.params.fileId}:`, error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a file
exports.deleteFile = async (req, res) => {
  try {
    const { projectId, fileId } = req.params;
    
    // Check if project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    // Check if user has write access to this project
    if (
      project.owner.toString() !== req.user.id &&
      !project.collaborators.some(c => 
        c.user.toString() === req.user.id && ['editor', 'admin'].includes(c.role)
      )
    ) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    // Check if file exists and belongs to the project
    if (!project.files.includes(fileId)) {
      return res.status(404).json({ message: 'File not found in this project' });
    }
    
    const file = await File.findById(fileId);
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }
    
    // If it's a directory, recursively delete all children
    const filesToDelete = [fileId];
    
    if (file.type === 'directory' && file.children && file.children.length > 0) {
      // Get all descendant files (recursive function)
      const getDescendantFiles = async (parentId) => {
        const children = await File.find({ parentId });
        
        for (const child of children) {
          filesToDelete.push(child._id);
          
          if (child.type === 'directory' && child.children && child.children.length > 0) {
            await getDescendantFiles(child._id);
          }
        }
      };
      
      await getDescendantFiles(fileId);
    }
    
    // Start a transaction
    const session = await mongoose.startSession();
    session.startTransaction();
    
    try {
      // Remove files from project
      await Project.findByIdAndUpdate(
        projectId,
        { $pull: { files: { $in: filesToDelete } } },
        { session }
      );
      
      // Remove file from parent's children if it has a parent
      if (file.parentId) {
        await File.findByIdAndUpdate(
          file.parentId,
          { $pull: { children: fileId } },
          { session }
        );
      }
      
      // Delete all files
      await File.deleteMany({ _id: { $in: filesToDelete } }, { session });
      
      // Commit the transaction
      await session.commitTransaction();
      session.endSession();
      
      res.json({ message: 'File deleted successfully' });
    } catch (error) {
      // Abort transaction if error occurs
      await session.abortTransaction();
      session.endSession();
      throw error;
    }
  } catch (error) {
    logger.error(`Error deleting file ${req.params.fileId}:`, error);
    res.status(500).json({ message: 'Server error' });
  }
};