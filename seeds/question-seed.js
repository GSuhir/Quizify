const { Question } = require('../models');

const questionData = [
    {
        question: 'What is my favorite fruit?',
        quiz_id: 1
    },
    {
        question: 'What part of the car makes contact with the road?',
        quiz_id: 2
    }
];

const seedQuestions = () => Question.bulkCreate(questionData);

module.exports = seedQuestions;