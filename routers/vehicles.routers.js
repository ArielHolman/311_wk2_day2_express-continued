const express = require('express')
const router  = express.Router()
const vehiclesController = require('../controllers/vehicles.controllers')

router.get('/vehicles',vehiclesController.listVehicle)

router.get('/vehicles/:vehicleId',vehiclesController.showVehicle)

router.post('/vehicles', vehiclesController.createVehicle)

router.put('/vehicles/:vehicleId',vehiclesController.updateVehicle)

router.delete('/vehicles/:vehicleId',vehiclesController.deleteVehicle)

module.exports = router