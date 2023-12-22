//routes fetch requests for /rooms/(posts, users, or rooms) to their respective folders

const router = require('express').Router();

const postRoutes = require('./post-routes')
const userRoutes = require('./user-routes')
const roomRoutes = require('./room-routes')

router.use('/posts', postRoutes)
router.use('/users', userRoutes)
router.use('/rooms', roomRoutes)

module.exports = router;