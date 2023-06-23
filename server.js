const express = require("express")
const db = require("./db")
const controllers = require("./controllers/plantController") 
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3001
const app = express()
const logger = require("morgan")

app.use(logger("dev"))
app.use(bodyParser.json())
app.use(express.json())

app.get("/", (req, res) => res.send("This is root!"))
app.get("/plants", controllers.getAllPlants)
app.post("/plants", controllers.createPlant)

db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))