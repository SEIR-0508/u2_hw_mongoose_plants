const Plant = require('../models/plant')

const getAllPlants = async(req,res) => {
    try{
        const plants = await Plant.find()
        return res.status(200).json({ plants })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getPlant = async(req,res)=>{
    try{
        const { id }= req.params
        const plant = await Plant.findById(id)
        if (plant) {
            return res.status(200).json({ plant })
        } else {
            return res.status(404).send("Plant doesn't exist")
        }
    } catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllPlants,
    getPlant
}