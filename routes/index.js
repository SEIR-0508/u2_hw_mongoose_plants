const express = require('express');
const controllers = require('../controllers');

const app = express();

app.get('/', (req, res) => res.send('This is root!'));

app.get('/plants', controllers.getAllPlants);

app.get('/plants/:id', controllers.getPlantById)

module.exports = app;
