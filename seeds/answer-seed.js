const { Answer } = require('../models');

const answerData = [
    {
        answerA: 'apples',
        answerB: 'bananas',
        answerC: 'oranges',
        answerD: 'mangos',
    },
];

const seedAnswers = () => Answer.bulkCreate(answerData);

module.exports = seedAnswers;