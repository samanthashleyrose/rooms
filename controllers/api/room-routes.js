const router = require('express').Router()
const { Room, User } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const roomData = await Room.findAll({
            include: { model: User }
        })
        res.status(200).json(roomData)
    }catch(err){
        res.status(500).json(err)
    }
})

router.post('/:uuid', async (req, res) => {
    const roomData = await Room.create({

    })
})

router.delete('/:uuid', async (req, res) => {
    try {
        const roomData = await Room.destroy({
            where: {
                id: req.params.uuid
            }
        })
        if (!roomData) {
            return res.status(404).json({ message: 'no room found with this id' })
        }
        res.status(200).json(roomData)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router