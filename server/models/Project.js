// server/models/Project.js
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['file', 'directory']
  },
  extension: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: 'plaintext'
  },
  children: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'File'
    }],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  collaborators: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    role: {
      type: String,
      enum: ['viewer', 'editor', 'admin'],
      default: 'viewer'
    }
  }],
  files: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'File'
  }],
  isPublic: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const File = mongoose.model('File', fileSchema);
const Project = mongoose.model('Project', projectSchema);

module.exports = { Project, File };