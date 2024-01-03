const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Routes '/rooms' request to the api folder, '/' request to the homeRoutes.js file
router.use('/', homeRoutes);
router.use('/rooms', apiRoutes);

module.exports = router;