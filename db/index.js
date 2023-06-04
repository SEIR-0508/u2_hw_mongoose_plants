const mongoose = require('mongoose')

mongoose
.connect('mongodb://127.0.0.1:27017/plantsDatabase')
.then(()=>console.log('Successfully logged into MongoDB'))
.catch((e)=>console.error('Connection error', e.message))

const db = mongoose.connection

module.exports = db