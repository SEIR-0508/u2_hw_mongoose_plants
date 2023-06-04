const express = require('express')
const db = require('./db')
const plantController = require('./controllers/plantController.js')
const logger = require('morgan')
const bodyParser = require('body-parser')
// require() imports and middleware here ^ ///////

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
// app.use() middleware here ^ ///////////////////

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


app.get('/', (req, res) => res.send('This is root!'))

app.get('/plants', plantController.getAllPlants)
app.get('/plants/:id', plantController.getPlantById)
app.post('/plants', plantController.createPlant)
app.put('/plants/:id', plantController.updatePlant)
app.delete('/plants/:id', plantController.deletePlant)

