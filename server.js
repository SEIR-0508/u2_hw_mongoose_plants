const express = require('express')
const db = require('./db')
const controllers = require('./controllers/plantController')
const bodyParser = require('body-parser')
const { Plant } = require('./models/plant')
const PORT = process.env.PORT || 3001

const logger = require('morgan');

const app = express()

app.use(bodyParser.json());
app.use(logger('dev'))
app.use(express.json())


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => res.send('This is root!!!'))

app.get('/plants', controllers.getAllPlants)

app.get('/plants/:id', controllers.getPlantById)

app.post('/plants', controllers.createPlant)

app.put('/plants/:id', controllers.updatePlant)

app.delete('/plants/:id', controllers.deletePlant)