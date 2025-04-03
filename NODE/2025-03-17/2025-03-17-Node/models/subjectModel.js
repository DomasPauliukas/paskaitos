const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
    subject: String
})

const Subject = mongoose.model('Subject', subjectSchema)

module.exports = Subject