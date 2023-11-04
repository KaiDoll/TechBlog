const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes); //public folder


module.exports = router;