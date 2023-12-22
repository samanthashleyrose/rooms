const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/rooms', apiRoutes);

module.exports = router;