const express = require('express')
const router  = express.Router()
const contactsController = require('../controllers/contact.controllers')

router.get('/contacts',contactsController.listContact)

router.get('/contacts/:contactId',contactsController.showContact)

router.post('/contacts', contactsController.createContact)

router.put('/contacts/:contactId',contactsController.updateContact)

router.delete('/contacts/:contactId',contactsController.deleteContact)

module.exports = router