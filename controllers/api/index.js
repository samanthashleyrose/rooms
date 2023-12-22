const router = require('express').Router();
const postRoutes = require('./post-routes')
const userRoutes = require('./user-routes')
const roomRoutes = require('./room-routes')

router.use('/posts', postRoutes)
router.use('/users', userRoutes)
router.use('/rooms', roomRoutes)

module.exports = router;