// models/userModel.js
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  // Assuming users are stored in a file named fakeUsers.json
  const users = require('../fakeUsers.json');
  res.json(users);
});

router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const users = require('../fakeUsers.json');
  const user = users.find(user => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  let users = require('../fakeUsers.json');
  users = users.filter(user => user.id !== userId);

  // Write updated users back to fakeUsers.json
  fs.writeFileSync('fakeUsers.json', JSON.stringify(users));

  res.json({ success: true, message: 'User deleted successfully' });
});

router.post('/', (req, res) => {
  const newUser = req.body;
  newUser.id = Date.now(); // Using timestamp as a temporary ID
  let users = require('../fakeUsers.json');
  users.push(newUser);

  // Write updated users back to fakeUsers.json
  fs.writeFileSync('fakeUsers.json', JSON.stringify(users));

  res.json(newUser);
});

module.exports = router;
