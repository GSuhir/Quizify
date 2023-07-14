const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001; 

app.get('/', (req, res) => {
  res.send('Hello, World!'); 
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});