const Plant = require(`../models/plant`)

const createPlant = async (req,res)=>{
    try{
        const plant = await new Plant(req.body)
        await plant.save()
        return res.status(201).json({
            plant
        })
    } catch(error){
        return res.status(500).json({error: error.message})
    }
}

const getAllPlants = async(req,res)=>{
    try{
        const plants = await Plant.find()
        return res.status(200).json({plants})
    } catch(error){
        return res.status(500).send(error.message)
    }
}

const getPlantById = async(req,res)=>{
    try{
        const { id } = req.params
        const plant = await Plant.findById(id)
        res.json(plant)
    } catch(e){
        console.log(e)
        res.send(`not found!`)
    }
}

module.exports = {
    getAllPlants,
    getPlantById,
     createPlant
}