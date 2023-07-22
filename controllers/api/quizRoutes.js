const quiz = require('express').Router({ mergeParams: true });
const { Quiz, Question } = require('../../models');
const questions = require('./questionRoutes');

quiz.get('/', async (req, res) => {
    try {
        const quizData = await Quiz.findAll();
        res.status(200).json(quizData);
    } catch (err) {
        res.status(500).json(err)
    }
});

// fill in quizData
quiz.get('/:quizId', async (req, res) => {
    try {
        const quizData = await Quiz.findByPk(req.params.quizId, {
            include: [{ model: Question }]
        });

        if (!quizData) {
            res.status(404).json({ message: 'Quiz not found.' });
            return;
        }

        res.status(200).json(quizData);
    } catch (err) {
        res.status(500).json(err);
    }
});

quiz.post('/', async (req, res) => {
    try {
        const quizData = await Quiz.create(req.body);
        res.status(200).json(quizData);
    } catch (err) {
        res.status(400).json(err);
    }
});

quiz.use('/:quizId/questions', questions);
module.exports = quiz;