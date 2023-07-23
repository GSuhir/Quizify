const router = require('express').Router({ mergeParams: true });
const { User, Quiz, Question, Answer } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/homepage'); //,{loggedIn: req.session.loggedIn}
        return;
    }

    res.render('login');
});

router.get('/quiz-maker', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] }
        });

        const user = userData.get({ plain: true });

        res.render('quizMaker', {
            ...user,
            loggedIn: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/quiz-list', async (req, res) => {
    try {
        const quizData = await Quiz.findAll();

        const quizzes = quizData.map((quiz) => quiz.get({ plain: true }));
    
        res.render('quizList', {
            quizzes
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/quiz/:id', async (req, res) => {
    try{
        const quizData = await Quiz.findByPk(req.params.id);
        const questionData = await Answer.findByPk(req.params.id, {
            include: [{ model: Question }]
        },
        );

        const quiz = quizData.get({ plain: true });
        const questions = questionData.get({ plain: true });

        res.render('quizTaker', {
            ...quiz,
            ...questions
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;