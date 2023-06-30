const express = require('express')
const controllers = require('./controllers/plantController.js')
//why cant this be req instead of require? 
//const db = require('./db')

//was supposed to do morgan stuff here but I'll consider this bonus bc it'll require hours of research

const PORT = process.env.PORT || 3001

const app = express()

app.get('/', (req, res) => {
    res.send('I am (g)root')
})
//okay this is where controllers get into it
//remember that controllers directory is handling all the FUNCTIONS and I am calling the ENDPOINT here
    // dont get confuse
        // you're gonna get confused though
const getAll = (req, res) => {
    response.send({
        msg:'getting plants'
    })
}

app.get('/plants', controllers.getAll)
app.get('/plants/:id', controllers.getById)

app.listen(PORT, () => console.log(`port ${3001} is listening`))