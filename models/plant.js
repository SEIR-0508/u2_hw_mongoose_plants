//step 2, connects mongoose, creates mongoose schema, 
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../db')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//2.1creates plant schema
const Plant = new Schema(
    {
        name: { type: String, required: true},
        description: { type: String, required: true},
        image: { type: String, required: true }
    },
    {timestamps: true},

)

//2.2exports plant schema
module.exports = mongoose.model('plants', Plant)

