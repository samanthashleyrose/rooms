//'room => post' relation is 'one => many'
//'user => post' relation is 'one => many'
//'user => room' relation is 'many <=> many' through room_user table

const User = require('./User');
const Room = require('./Room');
const Post = require('./Post');
const RoomUser = require('./RoomUser');

Post.belongsTo(User, {
    foreignKey: 'user_name',
    //posts will be deleted if the parent user is deleted
    onDelete: 'CASCADE'
})
User.hasMany(Post, {
    foreignKey: 'user_name'
})

Post.belongsTo(Room, {
    foreignKey: 'room_id',
    //posts will be deleted if the parent room is deleted
    onDelete: 'CASCADE'
})
Room.hasMany(Post, {
    foreignKey: 'room_id'
})

User.belongsToMany(Room, {
    through: {
        model: RoomUser,
        unique: false
    }
})
Room.belongsToMany(User, {
    through: {
        model: RoomUser,
        unique: false
    }
})

module.exports = {
    User,
    Room,
    Post,
    RoomUser
}