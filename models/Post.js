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
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        room_id: {
            type: DataTypes.STRING,
            allowNull: false,
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