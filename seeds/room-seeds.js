const { Room } = require('../models');

const roomData = [
    {
        id: 1,
        name: 'room1',
    },
    {
        id: 2,
        name: 'room2',
    },
    {
        id: 3,
        name: 'room3',
    },
    {
        id: 4,
        name: 'room4',
    },
    {
        id: 5,
        name: 'room5',
    },
]
const seedRooms = () => Room.bulkCreate(roomData)

module.exports = seedRooms