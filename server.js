const express = require('express')
const db = require('./db')
const PORT = 3001 
const app = express()
const controllers = require('./controllers/plantController')
const logger = require('morgan')
const bodyParser = require('body-parser')

app.use(logger('dev'))
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`)
})



// ROOT ROUTE
app.get('/', (req, res) => res.send('This is root!'))

// GET ALL PLANTS 
app.get('/plants', controllers.getAllPlants)

// GET PLANT BY ID 
app.get('/plants/:id', controllers.getPlantById)



