const { Question } = require('../models');

const questionData = [
    {
        question: 'What is my favorite fruit?',
    }
];

const seedQuestions = () => Question.bulkCreate(questionData);

module.exports = seedQuestions;