const { Schema } = require('mongoose')
const db = require('../db')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const plantSchema = new Schema (
    {
        name: { type: String, required: true},
        description: { type: String, required: true },
        image: { type: String, required: true},
    },
    {timestamps: true} 

)

module.exports = plantSchema
