
const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');

const plantController = require("./controllers/plantController.js");


// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;
const logger = require('morgan');
const app = express();

// app.use() middleware here ^ ///////////////////
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
app.use(logger('dev'))


app.get('/', (req, res) => res.send('This is root!'))

app.get('/plants', plantController.getAllPlants)
app.get('/plants/:id', plantController.getPlantById)


app.post('/plants', plantController.createPlant)
app.put('/plants/:id', plantController.updatePlant)
app.delete('/plants/:id', plantController.deletePlant)