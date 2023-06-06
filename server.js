const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db')
const plantController = require('./controllers/plantController')
const logger = require('morgan');
app.use(logger('dev'))

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/plants', plantController.getAllPlants)
app.get('/plants/:id', plantController.getPlantById)
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('This is root!'))
