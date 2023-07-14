const sequelize = require('../config/connection');
const { User } = require('../models');

const seedAnswers = require('./answer-seed');
const seedQuestions = require('./question-seed');
const seedQuizzes = require('./quiz-seed');
const userData = require('./userData.json')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n-- DATABASE SYNCED --\n');
    await seedAnswers();
    console.log('\n-- ANSWERS SEEDED --\n');

    await seedQuestions();
    console.log('\n-- QUESTIONS SEEDED --\n');

    await seedQuizzes();
    console.log('\n-- QUIZZES SEEDED --\n');

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });

    process.exit(0);
};

seedAll();