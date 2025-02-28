// api/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('../server/routes/auth');
const projectRoutes = require('../server/routes/projects');
const { authenticate } = require('../server/middleware/auth');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', authenticate, projectRoutes);

// Base route for API health check
app.get('/api', (req, res) => {
  res.json({ message: 'Code Editor API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// For Vercel serverless functions
module.exports = app;

// If running directly (not as a Vercel function)
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}