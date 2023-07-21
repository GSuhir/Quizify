const { Answer } = require('../models');

const answerData = [
    {
        answerA: 'apples',
        answerB: 'bananas',
        answerC: 'oranges',
        answerD: 'mangos',
    },
    {
        answerA: 'Eiffel Tower',
        answerB: 'Statue of Liberty',
        answerC: 'Great Wall of China',
        answerD: 'Colosseum',
    },
    {
        answerA: '100',
        answerB: '200',
        answerC: '400',
        answerD: '500',
    },
    {
        answerA: 'Frisbee',
        answerB: 'Soccer',
        answerC: 'Golf',
        answerD: 'Bocce ball',
    },
    {
        answerA: 'Wheat',
        answerB: 'Barley',
        answerC: 'Hops',
        answerD: 'Rice',
    },
    {
        answerA: 'Belgium',
        answerB: 'France',
        answerC: 'USA',
        answerD: 'England',
    },
    {
        answerA: 'Granite',
        answerB: 'Marble',
        answerC: 'Iron',
        answerD: 'Diamond',
    },
    {
        answerA: 'New Zealand',
        answerB: 'Croatia',
        answerC: 'Iceland',
        answerD: 'Ireland',
    },
    {
        answerA: 'Vermont',
        answerB: 'Canada',
        answerC: 'Rhode Island',
        answerD: 'Nevada',
    },
];

const seedAnswers = () => Answer.bulkCreate(answerData);

module.exports = seedAnswers;