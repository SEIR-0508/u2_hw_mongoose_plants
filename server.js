const express = require('express')
const db = require('./db')
const PORT = process.env.PORT || 3001

const app = express()
const Plant =  require('./models')
const logger = require('morgan')
app.use(logger('dev'))

app.use(express.json())

app.listen(PORT, () => console.log(`Listening on ${PORT}`))

app.get('/', (req, res) => res.send('This is root!'))

