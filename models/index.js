const User = require('./User');
const Quiz = require('./Quiz');
const Question = require('./Question');
const Answer = require('./Answer');

//belongsTo needed

Quiz.hasMany(Question, {
    foreignKey: 'quiz_id',
});

Question.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
})

Question.hasOne(Answer, {
    foreignKey: 'question_id',
});

Answer.belongsTo(Question, {
    foreignKey: 'question_id',
});

module.exports = {
    User,
    Quiz,
    Question,
    Answer,
};