const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User, Agent } = require('../model');

// GET users listing
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// Register new user
router.post('/register', async function (req, res, next) {
  const { email } = req.body;
  const existingUser = await User.findOne({ where: { email: email } });
  if (existingUser) {
    res.json({ message: 'Email already exists' });
  } else {
    await User.create(req.body);
    res.json({ message: 'User Created Successfully' });
  }
});

// User login
router.post('/login', async function (req, res, next) {
  const { name, password } = req.body;
  console.log('Received login request for user:', name);

  const existingUser = await User.findOne({ where: { name: name } });

  if (!existingUser) {
    console.log('User not found:', name);
    res.status(401).json({ message: 'User not registered' });
  } else {
    
    if (existingUser.password == password) {
      console.log('User logged in:', name);
      res.json({ message: 'User logged in' });
    } else {
      console.log('Invalid password for user:', name);
      res.status(401).json({ message: 'User credentials do not match' });
    }
  }
});

// Register futsal agent
router.post('/agent', async function (req, res, next) {
  const { email } = req.body;
  console.log('Received agent registration request for email:', email);

  const existingAgent = await Agent.findOne({ where: { email: email } });
  if (existingAgent) {
    console.log('Agent with email already exists:', email);
    res.json({ message: 'Email already exists' });
  } else {
    await Agent.create(req.body);
    console.log('Futsal agent registered:', email);
    res.json({ message: 'Futsal agent registered' });
  }
});

// Futsal agent login
router.post('/agent-login', async function (req, res, next) {
  const { name, password } = req.body;
  console.log('Received login request for agent:', name);

  const existingAgent = await Agent.findOne({ where: { name: name } });

  if (!existingAgent) {
    console.log('Agent not found:', name);
    res.status(401).json({ message: 'Agent not registered' });
  } else {

    if (existingAgent.password == password) {
      console.log('Agent logged in:', name);
      res.json({ message: 'Agent logged in' });
    } else {
      console.log('Invalid password for agent:', name);
      res.status(401).json({ message: 'Agent credentials do not match' });
    }
  }
});

// Update user profile data
router.post('/profile', async function (req, res, next) {
  // Update user profile data here
  // This route can handle both player and agent profile updates
  // You need to implement the logic for updating the user/agent profile data in the database
});

// Get user profile data by username
router.get('/profile/:name', async function (req, res, next) {
  // Get user profile data by username here
  // This route can handle both player and agent profiles
  // You need to implement the logic for retrieving the user/agent profile data from the database
});

module.exports = router;
