const { Answer } = require('../models');

const answerData = [
    {
        answer: 'apples',
    },
    {
        answer: 'bananas',
    },
    {
        answer: 'oranges',
    },
    {
        answer: 'mangos',
    },
];

const seedAnswers = () => Answer.bulkCreate(answerData);

module.exports = seedAnswers;