const express = require('express');
const db = require('./db')
const logger = require('morgan')
const bodyParser = require('body-parser')
const controller = require('./controllers/plantController')

const PORT = 3001
const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`On port ${PORT}`))

app.get('/', (req, res) => res.send('I am root!'))

app.get('/plants', controller.getAllPlants)
app.get('/plants/:id', controller.getPlantById)

app.post('/plant', controller.createPlant)
app.put('/plant/:id', controller.updatePlant)
app.delete('/plant/:id', controller.deletePlant)