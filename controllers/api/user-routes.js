const router = require('express').Router()
const { User, Room } = require('../../models')
bcrypt = require('bcrypt')

//route to get all users (/rooms/users, method: GET)
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{ model: Room }]
        });
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
})

//route to get one user by username (/rooms/users/:username, method: GET)
router.get('/:username', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                name: req.params.username
            },
            include: [{ model: Room }]
        });
        if (!userData) {
            return res.status(404).json({ message: 'username not found' })
        }
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Route to SIGN UP a user
router.post('/sign-up', async (req, res) => {
    try {
        const userData = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });

        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;

          res.status(200).json(userData)
        });
    } catch(err) {
        res.status(500).json(err)
    }
});

// Route for LOGGING IN a user
router.post('/login', async (req, res) => {
    try {
      // Finding user based off the email they entered
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      // Checking if the password matches the hashed password from the database
      const validPassword = await bcrypt.compareSync(req.body.password, userData.password);
  
      // If password doesn't match, throw an error
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      // If the password matches set the session user_id to the current users ID,
      // AND set the session logged_in status to TRUE
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // POST route for logging out
router.post('/logout', (req, res) => {
  // Kill the session
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router