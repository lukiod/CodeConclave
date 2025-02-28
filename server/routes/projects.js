// server/routes/projects.js
const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const projectController = require('../controllers/projects');
const fileController = require('../controllers/files');
console.log('Authenticate:', authenticate.name, typeof authenticate);
// Apply authentication middleware to all routes
router.use(authenticate);

// Project routes
router.get('/', projectController.getProjects);
router.post('/', projectController.createProject);
router.get('/:id', projectController.getProject);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

// Project sharing routes
router.post('/:id/share', projectController.shareProject);
router.delete('/:id/collaborators/:userId', projectController.removeCollaborator);

// File routes
router.get('/:projectId/files', fileController.getProjectFiles);
router.post('/:projectId/files', fileController.createFile);
router.get('/:projectId/files/:fileId', fileController.getFile);
router.put('/:projectId/files/:fileId', fileController.updateFileContent);
router.delete('/:projectId/files/:fileId', fileController.deleteFile);

module.exports = router;