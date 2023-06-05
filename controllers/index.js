//controllers are components that handle the logic of processing incoming requests and generating appropriate responses

// controller method to grab all the plants from the database

const Plant = require('../models/plant');

// create new plant, update plant, etc
// Defines an asynchronous function called create Plant that takes in two parameters (req and res) 
// This function creates new plants
const createPlant = async (req, res) => {
    // this begins a try-catch block used for error handling
    // the code inside the try block is the main logic of creating a new plant
    try {
        // creates a new instance of 'Plant' model/schema using data provided in the request body
        const plant = await new Plant(req.body)
        // saves the newly created plan tobject to the database
        await plant.save()
        // if the plant creation nad saving process is successful, this line send a response back to client with status code of 201 and a jSON object contatining the newly created plant as the reponse body
        // json method is used to convert the plant object to JSON format
        return res.status(201).json({
            plant,
        });
    // if there's an error, how do i handle it?
    } catch (error) {
        // sends a repsonse back with the status code of 500 (server error) and a JSON object containing an error message
        return res.status(500).json({ error: error.message })
    }
}

const getAllPlants = async (req, res) => {    
    try {
        // Plant.find retrieves all documents from "plant" collection of MongoDB database
        const plants  = await Plant.find()
        // json({plants}) sends the 'plants' data as a JSON response
        return res.status(200).json({ plants })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// ability to find specific plants
const getPlantById = async (req, res) => {
    try {
        // extracts the id paramter from req.params
        //req.params object contains route parameters and expects and id parameter in the URL
        //same as req.params.id
        const { id } = req.params;
        // uses await to pause the execution of the function until the "plant.findById" method is used to find a document from the "plant" collection in the MongoDB databse based on the provided Id
        //...wait for it....
        const plant = await Plant.findById(id)
        // checks if a 'plant' object was retrieved from the database
        if (plant) {
            // if it's found, it sends a response of code 200 and a JSON object containing the retrieved plant
            return res.status(200).json({ plant });
        }
        return res.status(404).send('Plant with specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
   }

}

module.exports =  {
    createPlant,
    getAllPlants,
    getPlantById
}