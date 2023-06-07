const express = require('express');
const bodyParser = require('body-parser')
const db = require('./db');
// require() imports and middleware here ^ ///////
const controllers = require('./controllers/plantController')
const PORT = process.env.PORT || 3001;

const app = express();

// app.use() middleware here ^ ///////////////////
app.use(bodyParser.json())
app.use(express.json())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('This is root!'))

app.post('/plants', controllers.createPlant)
app.get('/plants', controllers.getAllPlants)
app.get('/plants/:id', controllers.getPlantById)
app.put('/plants/:id', controllers.updatePlant)
app.delete('/plants/:id', controllers.deletePlant)


