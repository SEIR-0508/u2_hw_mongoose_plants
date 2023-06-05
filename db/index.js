// SUMMARY: Sets up db connection

// imports mongoose library 
// allows you to interact with MongoDB using JS
// provides way to define schemas, models, and perform database operations
const mongoose = require('mongoose')


// defines MongoDB connection URI
// URI specifies address and nam for connecting to MongoDB
// connnects to a MongoDB instance running on the local machine ('127.0.0.1)
//decault port: 27017
let MONGODB_URI = 'mongodb://127.0.0.1:27017/plantsDatabase'


// callback function that is executed when the connection to MongoDB is successfully established and another callback function that is executed when there is an error connecting
mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch((e) => {
        console.error('Connection error', e.message)
    })
     // this line enables debugging
    mongoose.set('debug', true)
    
    // represents the connection to the MongoDB database
    const db = mongoose.connection
    

    // allows other modules to use the Mongoose connection to perform database operations
    module.exports = db
