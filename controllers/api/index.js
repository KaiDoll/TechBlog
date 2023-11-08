const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes); //login/signup
router.use('/post', postRoutes);
router.use('/comment', commentRoutes); //public folder


module.exports = router;
//Establising routes to user, post, and comment