const express = require('express')
const db = require('./db')
const controller = require('./controllers/plantController')
const bodyParser = require('body-parser')
const logger = require('morgan')

const PORT = 3001

const app = express()
app.use(bodyParser.json())
app.use(logger('dev'))

db.on('error', console.error.bind(console, 'MongoDB not connecting'))

app.listen(PORT, ()=>console.log(`Listening on ${PORT}`))

app.get('/', (req,res)=>{
    res.send('This is the landing page!')
})

app.get('/plants', controller.getAllPlants)

app.get('/plants/:id', controller.getPlant)

app.post('/plants', controller.createPlant)

app.put('/plants/:id', controller.updatePlant)

app.delete('/plants/:id', controller.deletePlant)

