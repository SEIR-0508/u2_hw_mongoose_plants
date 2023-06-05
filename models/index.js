const mongoose = require('mongoose')
const plantSchema = require('./plant')


const Plant = mongoose.model('Plant', plantSchema)
module.exports = Plant