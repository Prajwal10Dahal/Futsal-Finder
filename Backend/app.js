var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { connectToDatabase } = require('./model');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const cors = require('cors');

var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// Connect to the database
connectToDatabase()
  .then(() => {
    console.log('Database Connected Successfully');
  })
  .catch((error) => {
    console.log('Database Connection Failed', error);
  });

// Use the user route
app.use('/users', usersRouter);

// Other routes (if any)
app.use('/', indexRouter);

module.exports = app;
