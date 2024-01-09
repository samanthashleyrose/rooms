//seed data for posts table

const { Post } = require('../models');

const postData = [
    {
        id: 1,
        content: 'string1',
        user_name: "user1",
        room_id: 1,
      },
      {
        id: 2,
        content: 'string2',
        user_name: "user2",
        room_id: 2,
      },
      {
        id: 3,
        content: 'string3',
        user_name: "user3",
        room_id: 3,
      },
      {
        id: 4,
        content: 'string4',
        user_name: "user4",
        room_id: 4,
      },
      {
        id: 5,
        content: 'string5',
        user_name: "user5",
        room_id: 5,
      },
]
const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts