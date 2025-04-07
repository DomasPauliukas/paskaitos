const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return /^[a-zA-Z0-9]+$/.test(value)
            },
            message: props => `${props.value} is not a valid username`
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
            },
            message: ({ value }) => {
                return `${value} is not a valid email`
            }
        }
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User