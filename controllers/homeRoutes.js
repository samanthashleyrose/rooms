// Import modules
const router = require('express').Router();
const { User, Room, Post, RoomUser } = require('../models')
const withAuth = require('../utils/auth');

// Setting the default route to /home
router.get('/', async (req, res) => {
    res.redirect('/login');
});

// Route for LOGIN
router.get('/login', async (req, res) => {
    try {
        res.render('login', {
            title: 'Log In',
            style: 'login.css'
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route for PROFILE
router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id);
        const user = userData.get({ plain: true });

        res.render('profile', {
            title: `${user.name}s profile`,
            style: 'profile.css',
            user,
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route for SIGN UP
router.get('/sign-up', async (req, res) => {
    try {
        res.render('sign-up', {
            title: 'Sign Up',
            style: 'sign-up.css'
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route for HOME screen
router.get('/home', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id);
        const user = userData.get({ plain: true });

        res.render('homepage', {
            title: `Welcome ${user.name}`,
            style: 'homepage.css'
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route for JOIN ROOM
router.get('/join-room', withAuth, async (req, res) => {
    try {
        res.render('join-room', {
            title: 'Join A Room!',
            style: 'join-room.css'
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route for CREATE ROOM
router.get('/create-room', withAuth, async (req, res) => {
    try {
        res.render('create-room', {
            title: 'Create A Room!',
            style: 'create-room.css'
        })
    } catch (err) {
        res.status(500).json(err);
    }
});


// Route for ROOM
router.get('/room/:id', withAuth, async (req, res) => {
    try {
        // Find room and include associated users
        const roomId = req.params.id
        const roomData = await Room.findByPk(roomId, {
            include: [
                {
                    model: User,
                    through: RoomUser
                },
                {
                    model: Post,
                    where: { room_id: roomId },
                    required: false
                }
            ],
            order: [
                [Post, 'created_at', 'DESC']
            ],
        });

        const room = roomData.get({ plain: true });
        res.render('room', {
            title: `${room.name}`,
            style: 'room.css',
            room,
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;