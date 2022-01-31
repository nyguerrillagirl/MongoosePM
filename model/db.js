// This file will do three things:
// 1. Bring in the Mongoose module
// 2. Build the connection string for the database
// 3. Open the Mongoose connection to the database

// Bring in the configuration file
const config = require('../config');

// Bring in Mongoose
const mongoose = require('mongoose');

// Get the connection string from the config file
const url = config.mongoUrl;

// Create the database connection
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('--> Connected correctly to server');
  }, (err) => {
    console.log('--> Error while trying to connect to db');
    console.log(err);
  });