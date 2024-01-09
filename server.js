// Importing required modules and packages
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const http = require('http');
const socketIo = require('socket.io');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// Importing Sequelize for database connectivity
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Creating an Express application
const app = express();
const PORT = process.env.PORT || 3001;

// Creating an instance of Handlebars with custom helpers
const hbs = exphbs.create({ helpers });

// Integrating http server with Socket.IO 
const server = http.createServer(app);
const io = socketIo(server);

// Session configuration
const sess = {
    secret: process.env.SECRET,  // Secret key for session encryption
    cookie: {
        maxAge: 1800000,  // Session duration in milliseconds (30 minutes)
        httpOnly: true,  // Restricting cookie access to HTTP only
        secure: false,   // Allowing cookies over non-HTTPS connections (development only)
        sameSite: 'strict',  // Enforcing strict same-site policy
    },
    resave: false,  // Preventing session data from being resaved if not modified
    saveUninitialized: true,  // Saving uninitialized sessions
    store: new SequelizeStore({
        db: sequelize  // Using Sequelize to store session data in the database
    })
};

// Setting up session middleware
// app.use(session(sess));
const sessionParser = session(sess)
app.use(sessionParser)
io.engine.use(sessionParser)
// Setting up Handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Setting up routes from the controllers
app.use(routes);

// Socket.IO setup - gives criteria for what should happen on the server side when a socket connection is opened
io.on('connection', (socket) => {
    console.log('A user connected');
// when a 'message' is recieved
    socket.on('message', (msg) => {
      console.log('message: ', msg, socket.request.session);
// take the 'msg' string and propogate it with key 'message'
      
      io.emit('message', msg);
    });
  
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

// Syncing the database and starting the Express server
sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => console.log(`started er up, you say? you got it boss, whatever you say! http://localhost:${PORT}`))
});