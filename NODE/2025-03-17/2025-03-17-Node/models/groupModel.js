const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    name: String,
    number: Number
})

const Group = mongoose.model('Group', groupSchema)

module.exports = Group