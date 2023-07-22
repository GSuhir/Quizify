const { Question } = require('../models');

const questionData = [
    {
        question: 'What is my favorite fruit?',
        quiz_id: 1
    },
    {
        question: 'What part of the car makes contact with the road?',
        quiz_id: 2
    },
    {
        question: 'What is the most visited tourist attraction in the world?',
        quiz_id: 3
    },
    {
        question: 'On average, how many seeds are located on the outside of a strawberry?',
        quiz_id: 4
    },
    {
        question: 'What sport has been played on the moon?',
        quiz_id: 5
    },
    {
        question: 'Which cereal grain is the most commonly used in beer?',
        quiz_id: 6
    },
    {
        question: 'From which country do French fries originate?',
        quiz_id: 7
    },
    {
        question: 'What is the hardest natural substance in the world?',
        quiz_id: 8
    },
    {
        question: 'In what country was The Lord of the Rings trilogy shot?',
        quiz_id: 9
    },
    {
        question: 'Which is the smallest state in the United States of America?',
        quiz_id: 10
    },
  
];

const seedQuestions = () => Question.bulkCreate(questionData);

module.exports = seedQuestions;