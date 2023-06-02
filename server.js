const express = require(`express`)
const db = require(`./db`)
const { getAllPlants, getPlantById } = require(`./controllers/plantController`)

const PORT = process.env.PORT || 3001

const app = express()

app.get('/', (req, res) => {
    res.send('This is root!')
})

app.get('/plants', getAllPlants)

app.get(`/plants/:id`, getPlantById)


app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
})