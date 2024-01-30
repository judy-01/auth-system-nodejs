const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/auth-system', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/auth', authRoutes);

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;  // Export app for testing
