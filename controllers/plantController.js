const Plant = require('../models/plant')

const getAll = async (req, res) => {
    try {
        const plants = await Plant.find()
        return res.status(200).json({ plants })
    } catch (error) {
    return res.status(500).send(error.message)
    }
}
const getById = async (req, res) => {
    try {
        const { id } = req.params
        const plant = await Plant.findById(id)
        if (plant) {
            return res.status(200).json({ plant })
        } return res. statis(404).send('A plant with that ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}   

module.exports = {
    getAll,
    getById
}


//REMEMBER
//CONTROLLERS ARE LOGIC METHODS INDICATING WHAT SERVER DOES DURING REQUEST
//THEY SEND BACK REQ'D INFO FOR AN IDENTIFIED ENDPOINT WHICH IS SPECIFIC
//if endpoint is a user, controller handles login, pw, credentials and routes it 
//essentially this is a function that'll handle HTTP requests
    //this is a good time to go to sleep and tomorrow, review node.js and this week's labs before getting back to is
    //ok maybe one more peek
//controllers and mongoose are so different but similar that it should be illega