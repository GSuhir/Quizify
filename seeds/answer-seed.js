const { Answer } = require('../models');

const answerData = [
    {
        answerA: 'apples',
        answerB: 'bananas',
        answerC: 'oranges',
        answerD: 'mangos',
        correctAnswer: 'answerD',
        question_id: 1
    },
    {
        answerA: 'chassis',
        answerB: 'engine',
        answerC: 'tires',
        answerD: 'catalytic converter',
        correctAnswer: 'answerC',
        question_id: 2
    }
];

const seedAnswers = () => Answer.bulkCreate(answerData);

module.exports = seedAnswers;