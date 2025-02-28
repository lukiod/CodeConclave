// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const config = require('./config/config');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const { errorHandler } = require('./middleware/error');
const logger = require('./config/logger');

// Initialize Express app
const app = express();

// Middleware
app.use(cors({ origin: config.CORS_ORIGIN }));
app.use(express.json({ limit: config.MAX_FILE_SIZE }));

// Connect to MongoDB
mongoose.connect(config.MONGODB_URI)
  .then(() => logger.info('Connected to MongoDB'))
  .catch(err => {
    logger.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });
app.get('/api', (req, res) => {
  res.json({ message: 'Code Editor API is running' });
});
// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
if (process.env.NODE_ENV !== 'test') {
  app.listen(config.PORT, () => {
    logger.info(`Server running in ${config.NODE_ENV} mode on port ${config.PORT}`);
  });
}

module.exports = app; // For testing purposes