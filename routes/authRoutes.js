const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await authController.register(username, password);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await authController.login(username, password);
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;

