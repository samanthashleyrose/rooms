const sequelize = require('../config/connection');

const seedPosts = require('./post-seeds')
const seedRooms = require('./room-seeds')
const seedUsers = require('./user-seeds')
const seedRoomUsers = require('./room-user-seeds')

const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('\n----- DATABASE SYNCED -----\n')
    await seedRooms();
    await seedUsers();
    await seedPosts();
    await seedRoomUsers();
    console.log('\n----- DATA SEEDED -----\n')

    process.exit(0)
};
seedAll()