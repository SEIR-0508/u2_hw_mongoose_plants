// Summary: Importing required modules
// express is a popular web app framework for node.js it provides a set of features and tools for building web apps and APIs
// use its functionality to define routes, handle requests, and more
const express = require('express');
// imports routes file
const routes = require('./routes');
// refers to db file
const db = require('./db');
// body-parser is a middleware module that parses the request body and makes it accessible in the 'req.body' property
const bodyParser = require('body-parser');
// morgan is a middleware module that provides logging functionality for HTTP requests
// It logs information about each incoming request such as method, URL, response satus
// useful for debugging and monitoring HTTP traffic
// Morgan is primarily used for logging purposes; track and analyze incoming requests, their details and response times
const logger = require('morgan');

// Setting up the server port
const PORT = process.env.PORT || 3001;

// Creating an Express application and setting up middleware
const app = express();
app.use(bodyParser.json());

// log HTTP request using Morgan
app.use(logger('dev'))

// Defining routes and associating them with controllers 
app.use('/api', routes);

// Handling MongoDB connection errors
// if there is an error connecting to the MongoDB database, it will execute the provided callback function
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Starts the server and listens for incoming http requests on specified port
app.listen(PORT, () => 
console.log(`Listening on port: ${PORT}`))

