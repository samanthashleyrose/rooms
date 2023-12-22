//'room => post' relation is 'one => many'
//'user => post' relation is 'one => many'
//'user => room' relation is 'many <=> many' through room_user table

const User = require('./User');
const Room = require('./Room');
const Post = require('./Post');
const RoomUser = require('./RoomUser');

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
User.hasMany(Post,{
    foreignKey: 'user_id'
})

Post.belongsTo(Room, {
    foreignKey: 'room_id',
    // onDelete: 'CASCADE'
})
Room.hasMany(Post,{
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