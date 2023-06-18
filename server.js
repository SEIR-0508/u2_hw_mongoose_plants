const express = require('express');
const db = require('./db');
const plantController = require('./controllers/plantController.js')
const logger = require('morgan');

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(express.json())
// app.use() middleware here ^ ///////////////////
app.get('/', (req, res) => res.send('This is root!'))
app.get('/plants', plantController.getAllPlants)
app.get('/plants/:id', plantController.getPlantById)
app.use(logger('dev'))



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))