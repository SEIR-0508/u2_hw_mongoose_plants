const express = require('express');
const db = require('./db');
const cors = require('cors')
const plantController = require('./controllers/plantController.js')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())
app.use(express.json())

// app.use() middleware here ^ ///////////////////

app.get('/', (req,res) => {
    res.send('This is the root!')
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/plants', plantController.getAllPlants)
app.get('/plants/:id', plantController.getPlantById)