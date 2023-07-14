const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Quiz extends Model {}

Quiz.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        quiz_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        question_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'questions',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'quiz',
    }
);

module.exports = Quiz;