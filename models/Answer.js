const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Answer extends Model {}

Answer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        answerA: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answerB: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answerC: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answerD: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'answers',
    }
);

module.exports = Answer;