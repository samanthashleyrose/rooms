//user-room relation is many to many, so they must be related through a third table
//columns include id, user_id, and room_id

const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection')

class RoomUser extends Model { }

RoomUser.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        room_id: {
            type: DataTypes.STRING,
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
        modelName: 'room_user'
    }
)
module.exports = RoomUser;