const mongoose = require('mongoose')

const lecturerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: (value) => {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
                // return value.length > 5 && value.includes('@')
            },
            message: (props) => {
                return `${props.value} is not a valid email`
            }
        }
        // VALIDATOR (value, val, v)- tai ka ivedame ir tikrinimas. PROPS - tai ka isveda, jei validator neteisingas.
    },
    yearsOfExperience: String,
    office: String,
    subjects: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Subject'
    },
    groups: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Group'
    }
})

const Lecturer = mongoose.model('Lecturer', lecturerSchema)

module.exports = Lecturer