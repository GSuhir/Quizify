const answers = require('express').Router({ mergeParams: true });
const { Answer } = require('../../models');

answers.get('/', async (req, res) => {
    try {
        const answerData = await Answer.findAll({
            where: {
                question_id: req.params.questionId
            }
        });
        res.status(200).json(answerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

answers.post('/', async (req, res) => {
    try {
        const answerData = await Answer.create({
            ...req.body,
            question_id: req.params.questionId
        });
        res.status(200).json(answerData);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = answers;