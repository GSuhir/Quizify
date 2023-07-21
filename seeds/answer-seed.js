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
    },
    {
        answerA: 'Eiffel Tower',
        answerB: 'Statue of Liberty',
        answerC: 'Great Wall of China',
        answerD: 'Colosseum',
        correctAnswer: 'answerA',
        question_id: 3
    },
    {
        answerA: '100',
        answerB: '200',
        answerC: '400',
        answerD: '500',
        correctAnswer: 'answerB',
        question_id: 4
    },
    {
        answerA: 'Frisbee',
        answerB: 'Soccer',
        answerC: 'Golf',
        answerD: 'Bocce ball',
        correctAnswer: 'answerC',
        question_id: 5
    },
    {
        answerA: 'Wheat',
        answerB: 'Barley',
        answerC: 'Hops',
        answerD: 'Rice',
        correctAnswer: 'answerB',
        question_id: 6
    },
    {
        answerA: 'Belgium',
        answerB: 'France',
        answerC: 'USA',
        answerD: 'England',
        correctAnswer: 'answerA',
        question_id: 7
    },
    {
        answerA: 'Granite',
        answerB: 'Marble',
        answerC: 'Iron',
        answerD: 'Diamond',
        correctAnswer: 'answerD',
        question_id: 8
    },
    {
        answerA: 'New Zealand',
        answerB: 'Croatia',
        answerC: 'Iceland',
        answerD: 'Ireland',
        correctAnswer: 'answerA',
        question_id: 9
    },
    {
        answerA: 'Vermont',
        answerB: 'Canada',
        answerC: 'Rhode Island',
        answerD: 'Nevada',
        correctAnswer: 'answerC',
        question_id: 10
    },
    
];

const seedAnswers = () => Answer.bulkCreate(answerData);

module.exports = seedAnswers;