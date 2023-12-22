const { User } = require('../models');

const userData = [
    {
        id: 1,
        name: 'user1',
        email: 'email1@rooms.com',
        password: '112345678',
      },
      {
        id: 2,
        name: 'user2',
        email: 'email2@rooms.com',
        password: '212345678',
      },
      {
        id: 3,
        name: 'user3',
        email: 'email3@rooms.com',
        password: '312345678',
      },
      {
        id: 4,
        name: 'user4',
        email: 'email4@rooms.com',
        password: '412345678',
      },
      {
        id: 5,
        name: 'user5',
        email: 'email5@rooms.com',
        password: '512345678',
      },
]
const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers