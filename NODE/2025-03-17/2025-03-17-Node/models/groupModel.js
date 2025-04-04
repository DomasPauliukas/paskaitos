const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    number: {
        type: Number,
        trim: true,
        required: true,
        unique: true
    }
}, { timestamps: true})

const Group = mongoose.model('Group', groupSchema)

module.exports = Group