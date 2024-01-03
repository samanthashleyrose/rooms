// Import modules
const router = require('express').Router();
const withAuth = require('../utils/auth');

// Setting the default route to /home
router.get('/', async (req, res) => {
    res.redirect('/home');
});

// Route for HOME screen
router.get('/home', async (req, res) => {
    try {
        res.render('homepage', {
            title: 'Welcome USER',
            style: 'homepage.css'
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route for JOIN ROOM
router.get('/join-room', async (req, res) => {
    try {
        res.render('join-room', {
            title: 'Join A Room',
            style: 'join-room.css'
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route for LOGIN
router.get('/login', async (req, res) => {
    try {
        res.render('login', {
            title: 'Log In!!!!',
            style: 'login.css'
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route for ROOM
router.get('/room/:id', async (req, res) => {
    try {
        res.render('room', {
            title: 'ROOM_NAME',
            style: 'room.css'
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// Export the router
module.exports = router;