//User table includes rows: id, name, email, and password
//password is encrypted through bcrypt via a hook
//user id does not have to be a uuid - it is uniquely generated via auto increment

const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                newUserData.email = await newUserData.email.toLowerCase()
                return newUserData
            },
            beforeUpdate: async (updatedUserData) => {
                if (updatedUserData.password) {
                    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                    updatedUserData.email = await updatedUserData.email.toLowerCase()
                    return updatedUserData;
                }
            },
            beforeBulkCreate: (bulkUserData) => {
                bulkUserData.forEach((UserData) => {
                    UserData.password = bcrypt.hashSync(UserData.password, 10)
                    UserData.email = UserData.email.toLowerCase()
                })
                return bulkUserData
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
)
module.exports = User;