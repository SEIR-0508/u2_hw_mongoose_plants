const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/plants/:id', controllers.getPlantById)
router.put('/plants/:id', controllers.updatePlant)
router.delete('/plants/:id', controllers.deletePlant)

router.get('/plants', controllers.getAllPlants)
router.post('/plants', controllers.createPlant)

router.get('/', (req, res) => res.send('This is root!'))

module.exports = router;