const express = require('express')
const cors = require('cors')
const controllers = require('./controllers/plantController.js')
const db = require('./db')
const logger = require('morgan')

const PORT = process.env.PORT || 3002
const app = express();

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


app.get('/', (req, res) => res.send('This is root!'))
app.get('/plants', controllers.getAllPlants)
app.get('/plant/:id', controllers.getPlantById)
