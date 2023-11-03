const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
//router.use('/', dashboard-routes);
router.use('/api', apiRoutes);

module.exports = router;

//This route takes us to the api(folder) directory