const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
const plantController = require('./controllers/plantController.js')



const PORT = process.env.PORT || 3001
const app = express()
app.use(bodyParser.json())
app.use(logger('dev'))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



app.get('/', (req, res)=>{
    res.send('This is our landing page!')
})


app.get('/plants', plantController.getAllPlants)


app.get('/plants/:id', plantController.getPlantById)



app.listen(PORT, () =>
console.log(`Listening on port: ${PORT}`))