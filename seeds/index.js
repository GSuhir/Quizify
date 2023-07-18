const sequelize = require('../config/connection');

const seedAnswers = require('./answer-seed');
const seedQuestions = require('./question-seed');
const seedQuizzes = require('./quiz-seed');
const seedUsers = require('./user-seed')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n-- DATABASE SYNCED --\n');

    await seedQuizzes();
    console.log('\n-- QUIZZES SEEDED --\n');

    await seedQuestions();
    console.log('\n-- QUESTIONS SEEDED --\n');
    
    await seedAnswers();
    console.log('\n-- ANSWERS SEEDED --\n');

    await seedUsers();
    console.log('\n-- USERS SEEDED --\n');

    process.exit(0);
};

seedAll();