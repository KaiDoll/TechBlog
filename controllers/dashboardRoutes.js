const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      // Get all posts and JOIN with user data
      const postData = await Post.findAll({
       where: {
        user_id: req.session.userId
       }
      });
  
      // // Serialize data so the template can read it
       const posts = postData.map((post) => post.get({ plain: true }));
  console.log(posts);
      // Pass serialized data and session flag into template
      res.render('dashboard', { 
        posts, 
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/new', withAuth, async (req, res) => {
    try {
     
      res.render('newPost', { 
        // posts, 
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;