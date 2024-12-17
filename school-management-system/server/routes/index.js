const express = require('express');
const userRoutes = require('./userRoutes');

const router = express.Router();

// Use your routes here
router.use('/school-management', userRoutes);

module.exports = router;
