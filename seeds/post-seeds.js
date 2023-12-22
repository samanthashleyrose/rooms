//seed data for posts table

const { Post } = require('../models');

const postData = [
    {
        id: 1,
        content: 'string1',
        user_id: 1,
        room_id: 1,
      },
      {
        id: 2,
        content: 'string2',
        user_id: 2,
        room_id: 2,
      },
      {
        id: 3,
        content: 'string3',
        user_id: 3,
        room_id: 3,
      },
      {
        id: 4,
        content: 'string4',
        user_id: 4,
        room_id: 4,
      },
      {
        id: 5,
        content: 'string5',
        user_id: 5,
        room_id: 5,
      },
]
const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts