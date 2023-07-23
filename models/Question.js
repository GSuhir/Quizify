const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Question extends Model {}

Question.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        question_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quiz_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'quiz',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'questions',
    }
);

module.exports = Question;