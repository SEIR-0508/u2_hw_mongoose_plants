const Plant = require('../models/plant')

const getAllPlants = async(req,res) => {
    try{
        const plants = await Plant.find()
        return res.status(200).json({ plants })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createPlant = async(req,res)=> {
    try{
        const plant = await new Plant(req.body)
        await plant.save()
        return res.status(201).json({ plant })
    } catch(error){
        return res.status(500).json({ error: error.message })
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

const updatePlant = async(req,res)=>{
    try{
        let { id } = req.params
        let plant = await Plant.findByIdAndUpdate(id, req.body, { new:true })
        if (plant){
            return res.status(200).json(plant)
        }
        throw new Error('Plant not found')
    } catch(error) {
        return res.status(500).send(error.message)
    }
}

const deletePlant = async(req,res)=> {
    try{
        const { id } = req.params
        const deletedPlant = await Plant.findByIdAndDelete(id, req.body, { new:true })
        if(deletedPlant){
            return res.status(200).json(deletedPlant)
        }
        throw new Error('Plant not found')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllPlants,
    getPlant,
    createPlant,
    updatePlant,
    deletePlant
}