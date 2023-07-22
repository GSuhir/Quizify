const { Quiz } = require('../models');

const quizData = [
    {
        quiz_name: 'Fruits',
    },
    {
        quiz_name: 'Cars'
    }
];

const seedQuizzes = () => Quiz.bulkCreate(quizData);

module.exports = seedQuizzes;