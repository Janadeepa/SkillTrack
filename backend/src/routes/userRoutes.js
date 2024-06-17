const express = require('express');
const { getUser } = require('../controllers/userController');

const router = express.Router();

router.get('/:id', getUser);

// Additional routes can be added here

module.exports = router;
