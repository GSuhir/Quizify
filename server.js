const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
require('dotenv').config();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001; 



const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.COOKIE_SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.redirect('/login');
// });

app.use(routes);

app.get('/homepage', (req, res) => {
  if (req.session.loggedIn) {
    // If the user is logged in, render the homepage
    res.render('homepage', { loggedIn: true });
  } else {
    // If the user is not logged in, redirect to the login page
  
    res.render('login', { loggedIn: false });

  }
});

// app.get('/', (req, res) => {
//   res.render('homepage', { loggedIn: req.session.user ? true : false });
// });

app.get('/', (req, res) => {
  console.log(req.session)
  if (req.session.user) {
    // If the user is logged in, render the homepage
    res.render('homepage', { loggedIn: true });
  } else {
    // If the user is not logged in, redirect to the login page
  
    res.render('login', { loggedIn: false });

  }
});


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
});