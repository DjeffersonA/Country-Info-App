const express = require('express');
const router = express.Router();

// GET route to root
router.get('/', (req, res) => {
  res.send('Welcome to the Country Info API!');
});

module.exports = router;