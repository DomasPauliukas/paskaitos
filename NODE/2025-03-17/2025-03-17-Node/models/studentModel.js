const mongoose = require('mongoose')

// 'new' sukuria nauja object.
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true // tarpus apkarpo '  John  ' = 'John'
    },
    // surname: String,
    surname: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        min: 0
    },
    city: String,
    email: String,
    // groupId: String,
    interests: [String],
    languages: [String]
    // phone: {
    //     type: String,
    //     required: true,
    //     trim: true,
    //     unique: true  -- kad nesikartotu patikrina.

    // }
}, { timestamps: true }) //rodys created/updated laikus.

// is didziosios raides kintamasis
const Student = mongoose.model('Student', studentSchema)

module.exports = Student