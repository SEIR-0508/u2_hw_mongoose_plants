const express = require('express')
const db = require('./db')
const controllers = require('./controllers/plantController')
const bodyParser = require('body-parser');
const logger = require('morgan');



const PORT = process.env.PORT || 3001

const app = express()
app.use(bodyParser.json())
app.use(logger('dev'))

app.listen(PORT, () => {console.log(`Listening on port: ${PORT}`)})
db.on('error', console.error.bind(console, 'MongoDB connection error:'))




app.get('/', (req, res) => {
    console.log('express is working')
    res.send('This is root!')
})

app.get('/plants', controllers.getAllPlants)
app.get('/plants/:id', controllers.getPlantById)
app.post('/plants', controllers.createPlant)
app.put('/plants/:id', controllers.updatePlant)
app.delete('/plants/:id', controllers.deletePlant)
