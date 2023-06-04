
//??????????????????
const express = require('express')
const db = require('./db')

const PORT = process.env.PORT || 3001
const app = express()

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

app.get('/', (req, res) => res.send('This is root!'))

//app.get('/plants', controllers.getAllPlants)
app.get('/plants', controllers.getAllPlants)
