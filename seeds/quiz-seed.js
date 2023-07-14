const { Quiz } = require('../models');

const quizData = [
    {
        quiz_name: 'Fruits',
    }
];

const seedQuizzes = () => Quiz.bulkCreate(quizData);

module.exports = seedQuizzes;