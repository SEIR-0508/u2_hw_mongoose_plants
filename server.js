const express = require('express');
const db = require('./db');
const plantController = require('./controllers/plantController.js')
const logger = require('morgan');
const bodyParser = require('body-parser');
// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

// app.use() middleware here ^ ///////////////////

app.use(logger('dev'))
app.use(bodyParser.json())
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))



app.get('/', (req, res) => res.send('This is root!'))

// the readme says to put the below text in routes, but i think it should be going here instead

app.get('/plants/:id', plantController.getPlantById)

app.get('/plants', plantController.getAllPlants)
app.post('/plants', plantController.createPlant)
app.put('/plants/:id', plantController.updatePlant)
app.delete('/plants/:id', plantController.deletePlant)