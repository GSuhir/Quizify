const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const projectRoutes = require('./homeRoutes');

router.use('/users', userRoutes);
// router.use('/projects', homeRoutes);

module.exports = router;