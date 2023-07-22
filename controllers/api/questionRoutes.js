const router = require('express').Router();
const { Question, Answer } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const questionData = await Question.findAll();
        res.status(200).json(questionData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const questionData = await Question.findByPk(req.params.id, {
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

router.post('/', async (req, res) => {
    try {
        const questionData = await Question.create(req.body);
        res.status(200).json(questionData);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;