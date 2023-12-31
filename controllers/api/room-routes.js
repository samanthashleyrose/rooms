const router = require('express').Router()
const { Room, User, RoomUser, Post } = require('../../models')

// Route to CREATE a room
router.post('/create-room', async (req, res) => {
    try {
        const roomData = await Room.create({
            name: req.body.name
        });
        const roomUserData = await RoomUser.create({
            user_id: req.session.user_id,
            room_id: roomData.id
        })
        const bigData = { roomData, roomUserData}
        res.status(200).json(bigData)
    } catch (err) {
        res.status(500).json(err)
    }
});

// Route to JOIN a room
router.post('/join-room', async (req, res) => {
    try {
        const roomUserData = await RoomUser.create({
            user_id: req.session.user_id,
            room_id: req.body.roomCode
        })

        res.status(200).json(roomUserData)
    } catch (err) {
        res.status(500).json(err)
    }
});

// Route to DELETE a room by id (uuid)
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
});

// Route to see all rooms
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

// Route to update a room (to add a user or a post)
router.put('/:uuid', async (req, res) => {
    const roomData = await Room.update({
        where: {
            id: req.params.uuid
        },

    })
})


module.exports = router