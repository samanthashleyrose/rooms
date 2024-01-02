const router = require('express').Router()
const { User, Room } = require('../../models')

//route to get all users (/rooms/users, method: GET)
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{ model: Room }]
        });
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
})

//route to get one user by username (/rooms/users/:username, method: GET)
router.get('/:username', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                name: req.params.username
            },
            include: [{ model: Room }]
        });
        if (!userData) {
            return res.status(404).json({ message: 'username not found' })
        }
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
})

//route to create a new user (/rooms/users/, method: POST)
// req.body should look like this:
// {   name: 'username'
//     email: 'email'
//     password: '8 character password'}
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body)
        res.status(200).json(userData)
    }catch(err){
        res.status(400).json(err.errors[0].message)
    }
})

module.exports = router