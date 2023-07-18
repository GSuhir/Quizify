const router = require('express').Router();
const { Answer } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const answerData = await Answer.findAll();
        res.status(200).json(answerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const answerData = await Answer.create(req.body);
        res.status(200).json(answerData);
    } catch (err) {
        res.status(400).json(err);
    }
});