const questions = require('express').Router({ mergeParams: true });
const { Question, Answer } = require('../../models');
const answers = require('./answerRoutes');

questions.get('/', async (req, res) => {
    try {
        const questionData = await Question.findAll({
            where: {
                quiz_id: req.params.quizId
            }
        });
        res.status(200).json(questionData);
    } catch (err) {
        res.status(500).json(err);
    }
});

questions.get('/:questionId', async (req, res) => {
    try {
        const questionData = await Question.findByPk(req.params.questionId, {
            include: [{ model: Answer }]
        });

        if (!questionData) {
            res.status(404).json({ message: 'Question not found.' });
            return;
        }

        res.status(200).json(questionData);
    } catch (err) {
        res.status(500).json(err);
    }
});

questions.post('/', async (req, res) => {
    try {
        console.log(req);
        const questionData = await Question.create({
            ...req.body, 
            quiz_id: req.params.quizId
        });
        res.status(200).json(questionData);
    } catch (err) {
        res.status(400).json(err);
    }
});

questions.use('/:questionId/answers', answers);

module.exports = questions;