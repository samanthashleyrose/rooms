//posts table includes id, content, user_id, and room_id
//id does not have to be a uuid - it will be unique through auto increment
//relations are 'one user ==> many posts' and 'one room ==> many posts'

const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection')

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        content:{
            type: DataTypes.STRING,
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'name'
            }
        },
        room_id: {
            type: DataTypes.UUID,
            references: {
                model: 'room',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
)
module.exports = Post;