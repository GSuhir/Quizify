const { Quiz } = require('../models');

const quizData = [
    {
        quiz_name: 'Fruits',
    },
    {
        quiz_name: 'Cars'
    },
    {
        quiz_name: 'Tourism'
    },   
    {
        quiz_name: 'Berry Trivia'
    },
    {
        quiz_name: 'Selenography'
    },
    {
        quiz_name: 'Brew'
    },
    {
        quiz_name: 'Side dishes'
    },
    {
        quiz_name: `They're Minerals, Marie!`
    },
    {
        quiz_name: 'Tolkien Trivia'
    },
    {
        quiz_name: 'USA'
    }
];

const seedQuizzes = () => Quiz.bulkCreate(quizData);

module.exports = seedQuizzes;