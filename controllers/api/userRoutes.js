const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
//go to the database and find the user by their username.
    if (!user) {
      res  
        .status(400)
        .json({ message: 'No username found' });
      return;
    }
    //Find the, then we check if their password is valid

    const validPassword = await user.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username =user.username;
      req.session.loggedIn = true;
      
      res.json({ user: user, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});
//Send it to the front end

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
