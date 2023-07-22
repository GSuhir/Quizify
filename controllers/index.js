const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes2 = require('./homeRoutes2');

router.use('/', homeRoutes2);
router.use('/api', apiRoutes);

module.exports = router;