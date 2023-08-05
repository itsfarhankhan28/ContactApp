const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    firstname:String,
    lastname:String,
    state:String
})

const ContactSchema = mongoose.model('ContactSchema',Schema)

module.exports = ContactSchema