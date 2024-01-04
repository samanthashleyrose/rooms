const router = require('express').Router()
const { User, Room } = require('../../models')

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

//route to create a new user (/rooms/users/, method: POST)
// req.body should look like this:
// {   name: 'username'
//     email: 'email'
//     password: '8 character password'}
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body)
        res.status(200).json(userData)
    }catch(err){
        res.status(400).json(err.errors[0].message)
    }
})

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
      const validPassword = await userData.checkPassword(req.body.password);
  
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

module.exports = router