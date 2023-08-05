const express = require('express')

const router = express.Router()

const {CreateContact , GetContact , UpdateContact , DeleteContact}= require('../controller/contactcontrol')

router.post('/create',CreateContact)

router.get('/get',GetContact)

router.put('/update/:id',UpdateContact)

router.delete('/delete/:id',DeleteContact)

module.exports =  router