const router = require('express').Router()
const { User, Room } = require('../../models')

//route to get all users
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
//route to get one user by username (compares to User.name)
router.get('/:username', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                name: req.params.username
            },
            include: [{ model: Room }]
        });
        if(!userData){
            return res.status(404).json({message: 'username not found'})
        }
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router