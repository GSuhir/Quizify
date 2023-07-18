const router = require('express').Router();
const { Question } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const questionData = await Question.findAll();
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