const router = require('express').Router({ mergeParams: true });
const userRoutes = require('./userRoutes');
const quizRoutes = require('./quizRoutes');
const questionRoutes = require('./questionRoutes');
const answerRoutes = require('./answerRoutes');

router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);
// router.use('/quiz/:quizId/questions', questionRoutes);
// router.use('/answers', answerRoutes);

module.exports = router;