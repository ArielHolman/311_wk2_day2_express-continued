const contacts = require('./../data/contacts')
let counter = contacts.length+1

// list
const listContact = (req, res) => {
  res.json(contacts)
}

// create
const createContact = (req, res) => {
  contacts.push({_id: counter++, ...req.body});
  res.json(contacts[contacts.length-1])
}

// update
const updateContact = (req, res) => {
  let foundContact = contacts.find( contact => contact._id === parseInt(req.params.contactId))
  foundContact.name = req.body.name ? req.body.name : foundContact.name
  foundContact.avatar = req.body.avatar ? req.body.avatar : foundContact.avatar
  foundContact.occupation = req.body.occupation ? req.body.occupation : foundContact.occupation
  res.json(foundContact)
}

// delete
const deleteContact = (req, res) => {
  let foundContact = contacts.find( contact => contact._id === parseInt (req.params.contactId))
  if (foundContact) {
    foundContact.isActive = false
    res.send("Bye Felicia")
  } else {
    res.status(400).json({message: `No contact with the id of ${req.params.userId}`})
  }
  }
// show
const showContact = (req, res) => {
  let foundContact = contacts.find( contact => contact._id === parseInt(req.params.contactId))
  res.json(foundContact)
}

module.exports = {
  listContact,
  createContact,
  updateContact,
  deleteContact,
  showContact
}