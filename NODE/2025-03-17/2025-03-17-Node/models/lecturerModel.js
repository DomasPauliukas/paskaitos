const mongoose = require('mongoose')

const lecturerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    yearsOfExperience: String,
    office: String,
    subjects: [String],
    groups: [String]
})

const Lecturer = mongoose.model('Lecturer', lecturerSchema)

module.exports = Lecturer