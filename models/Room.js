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
            primaryKey: true,
            //when we delete a room, we don't want to delete the associated users.... either the api or the front end will have to handle null values so that rooms with null id's are not displayed
            allowNull: true,
            onDelete: 'SET NULL'
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