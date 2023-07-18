const router = require('express').Router();
const userRoutes = require('./userRoutes');
const quizRoutes = require('./quizRoutes');
const questionRoutes = require('./questionRoutes');
const answerRoutes = require('./answerRoutes');

router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);
router.use('/questions', questionRoutes);
router.use('/answers', answerRoutes);

module.exports = router;