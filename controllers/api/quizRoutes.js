const router = require('express').Router();
const { Quiz } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const quizData = await Quiz.findAll();
        res.status(200).json(quizData);
    } catch (err) {
        res.status(500).json(err)
    }
});

// fill in quizData
router.get('/:id', async (req, res) => {
    try {
        const quizData = await Quiz.findByPk(req.params.id, {});

        if (!quizData) {
            res.status(404).json({ message: 'Quiz not found.' });
            return;
        }

        res.status(200).json(quizData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const quizData = await Quiz.create(req.body);
        res.status(200).json(quizData);
    } catch (err) {
        res.status(400).json(err);
    }
});