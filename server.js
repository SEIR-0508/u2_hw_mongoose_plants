const express = require('express')
const db = require('./db')
const controllers = require(`./controllers/plantController`)
const logger = require('morgan')
const bodyParser = require('body-parser')


// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
// app.use() middleware here ^ ///////////////////

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.get('/', (req, res) => res.send('This is root!'))
app.get('/plants', controllers.getAllPlants)
app.get('/plants/:id', controllers.getPlantById)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))