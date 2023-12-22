//room table includes id and name
//room id uses uuid - this will be presented on the page as the key for entering a room

const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection')

class Room extends Model { }

Room.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'room'
    }
)
module.exports = Room;