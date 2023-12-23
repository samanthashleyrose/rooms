
const router = require('express').Router()
const { Room, User, RoomUser, Post } = require('../../models')
//route to see all rooms
router.get('/', async (req, res) => {
    try {
        const roomData = await Room.findAll({
            include: [{ model: User }, { model: Post }]
        })
        res.status(200).json(roomData)
    } catch (err) {
        res.status(500).json(err)
    }
})

//route to create a room
//must include room uuid, room name, and user_id (through RoomUser)
router.post('/:uuid', async (req, res) => {
    const roomData = await Room.create({

    })
})

//route to update a room (to add a user or a post)
router.put('/:uuid', async (req, res) => {
    const roomData = await Room.update({
        where: {
            id: req.params.uuid
        },

    })
})

//route to delete a room by id (uuid)
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
        res.status(200).json({ message: 'room deleted' })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router