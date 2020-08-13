const vehicles = require('./../data/vehicles')
let counter = vehicles.length+1

// list
const listVehicle = (req, res) => {
  res.json(vehicles)
}

// create
const createVehicle = (req, res) => {
  vehicles.push({_id: counter++, ...req.body});
  res.json(vehicles[vehicles.length-1])
}

// update
const updateVehicle = (req, res) => {
  let foundVehicles = vehicles.find( vehicle => vehicle._id === parseInt(req.params.vehicleId))
  foundVehicles.imgUrl = req.body.imgUrl ? req.body.imgUrl : foundVehicles.imgUrl
  foundVehicles.year = req.body.year ? req.body.year : foundVehicles.year
  foundVehicles.make = req.body.make ? req.body.make : foundVehicles.make
  foundVehicles.model = req.body.model ? req.body.model : foundVehicles.model
  foundVehicles.price = req.body.price ? req.body.price : foundVehicles.price
  foundVehicles.km = req.body.km ? req.body.km : foundVehicles.km
  foundVehicles.miles = req.body.miles ? req.body.miles : foundVehicles.miles
  foundVehicles.fuel = req.body.fuel ? req.body.fuel : foundVehicles.fuel
  foundVehicles.city = req.body.city ? req.body.city : foundVehicles.city
  foundVehicles.isNew = req.body.isNew ? req.body.isNew : foundVehicles.isNew
  res.json(foundVehicles)
}

// delete
const deleteVehicle = (req, res) => {
  let foundVehicles = vehicles.find( vehicle => vehicle._id === parseInt (req.params.vehicleId))
  if (foundVehicles) {
    foundVehicles.isActive = false
    res.send("Bye bye boo!")
  } else {
    res.status(400).json({message: `No vehicle with the id of ${req.params.userId}`})
  }
  }
// show
const showVehicle = (req, res) => {
  let foundVehicles = vehicles.find( vehicle => vehicle._id === parseInt(req.params.vehicleId))
  res.json(foundVehicles)
}

module.exports = {
  listVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
  showVehicle
}