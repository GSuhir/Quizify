const { Question } = require('../models');

const questionData = [
    {
        question_name: 'What is my favorite fruit?',
        quiz_id: 1
    },
    {
        question_name: 'What part of the car makes contact with the road?',
        quiz_id: 2
    },
    {
        question_name: 'What is the most visited tourist attraction in the world?',
        quiz_id: 3
    },
    {
        question_name: 'On average, how many seeds are located on the outside of a strawberry?',
        quiz_id: 4
    },
    {
        question_name: 'What sport has been played on the moon?',
        quiz_id: 5
    },
    {
        question_name: 'Which cereal grain is the most commonly used in beer?',
        quiz_id: 6
    },
    {
        question_name: 'From which country do French fries originate?',
        quiz_id: 7
    },
    {
        question_name: 'What is the hardest natural substance in the world?',
        quiz_id: 8
    },
    {
        question_name: 'In what country was The Lord of the Rings trilogy shot?',
        quiz_id: 9
    },
    {
        question_name: 'Which is the smallest state in the United States of America?',
        quiz_id: 10
    },
  
];

const seedQuestions = () => Question.bulkCreate(questionData);

module.exports = seedQuestions;