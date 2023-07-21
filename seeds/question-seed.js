const { Question } = require('../models');

const questionData = [
    {
        question: 'What is my favorite fruit?',
        quiz_id:1
    },
    {
        question: 'What is the most visited tourist attraction in the world?',
        quiz_id:2
    },
    {
        question: 'On average, how many seeds are located on the outside of a strawberry?',
        quiz_id:3
    } ,
    {
        question: 'What sport has been played on the moon?',
        quiz_id:4
    }, 
    {
        question: 'Which cereal grain is the most commonly used in beer?',
        quiz_id:5
    },
     {
        question: 'From which country do French fries originate?',
        quiz_id:6
    }, 
    {
        question: 'What is the hardest natural substance in the world?',
        quiz_id:7
    },
    {
        question: 'In what country was The Lord of the Rings trilogy shot?',
        quiz_id:8
    },
    {
        question: 'Which is the smallest state in the United States by size?',
        quiz_id:9
    }
];

const seedQuestions = () => Question.bulkCreate(questionData);

module.exports = seedQuestions;