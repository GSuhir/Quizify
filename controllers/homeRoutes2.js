const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/homepage');
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
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;