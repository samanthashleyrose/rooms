//seed data for third table that links rooms and users

const { RoomUser } = require('../models');

const roomUserData = [
  {
    user_id: 3,
    room_id: 1,
  },
  {
    user_id: 3,
    room_id: 3,
  },
  {
    user_id: 3,
    room_id: 4,
  },
  {
    user_id: 3,
    room_id: 5,
  },
  {
    user_id: 4,
    room_id: 1,
  },
  {
    user_id: 4,
    room_id: 2,
  },
  {
    user_id: 5,
    room_id: 3,
  },
];

const seedRoomUsers = () => RoomUser.bulkCreate(roomUserData);

module.exports = seedRoomUsers;
