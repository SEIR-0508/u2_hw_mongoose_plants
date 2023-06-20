const express = require("express")
const db = require("./db")
const controllers = require("./controllers/plantController") // import your controllers
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3001

const app = express()

//For debugging purposes and overall better logging we're going to use an express middleware called morgan:
const logger = require("morgan")
app.use(logger("dev"))

//we will need the express body-parser middleware to access the req.body object.
app.use(bodyParser.json())

// middleware
app.use(express.json())

// routes
app.get("/", (req, res) => res.send("This is root!"))

app.get("/plants", controllers.getAllPlants) // add the /plants route
app.get("/plants/:id", controllers.getPlantById)
app.post("/plants", controllers.createPlant)
app.put("/plants/:id", controllers.updatePlant)
app.delete("/plants/:id", controllers.deletePlant)

db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
