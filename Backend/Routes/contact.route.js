const express = require('express')
const router = express.Router()
const { addContact } = require('../Controller/contact.Ctl')

router.post('/add', addContact)

module.exports = router
