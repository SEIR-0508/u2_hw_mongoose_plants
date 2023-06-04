//Step 1:  Create mongoose database and connection
const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/plantsDatabase')
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
/*

const Plant = require('../models/plant')

const getAllPlants = async (req, res) => 
{

try
{
    const plants = await Plant.find()
    return res.status(200).json({plants})

}
catch(error)
{
    return res.status(500).send(error.message)
}

module.exports = {
    getAllPlants
}

}
*/


const Plant = require('../models/plant');

const getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.find()
        return res.status(200).json({ plants })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllPlants
}