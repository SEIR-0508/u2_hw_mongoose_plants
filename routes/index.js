// creating a route on our server to connect the request with controller

const { Router } = require('express'); 
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/plants', controllers.createPlant)

router.get('/plants', controllers.getAllPlants)

router.get('/plants/:id', controllers.getPlantById)

module.exports = router; 