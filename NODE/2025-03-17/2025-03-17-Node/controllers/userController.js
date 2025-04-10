const bcrypt = require('bcryptjs')  // npm i bcryptjs kad uzkoduoti passwords.
const jwt = require('jsonwebtoken') // npm i jsonwebtoken
const User = require('../models/userModel')


const register = async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.status(400).send({ message: 'All fields are required' })
    }

    const existingUser = await User.findOne({email})
    if (existingUser) {
        return res.status(400).send({message: 'Email already exists'})
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            email,
            username,
            password: hashedPassword
        })
        await newUser.save()

        res.send({ message: 'user registered successfully'})
        // cia reikia kazka dar codint, kad liktu is karto prisijunges useris po registracijos. token kurti ar kazka (?) kaip ir login'e logika, ta pati cia reikia. kur token(?)
    } catch (error) {
        res.status(500).send(error)
    }
}

const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).send({ message: 'Invalid email or password' })
    }
    try {
        const user = await User.findOne({email})

        if (!user) {
            return res.status(400).send({ message: 'Invalid email or password'})
        }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return res.status(400).send({ message: 'Invalid email or password' })
    }

    const token = jwt.sign( // cia kai loginames, ka pridedame i tokena. galime prideti ka reikia. paskui issitrauksime per decode FRONTENDE
        {
            username: user.username,
            email: user.email,
            id: user._id
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' } // uz kiek laiko islogins user. 
    )

        res.send({ message: 'User successfully logged in', token })
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateUser = async (req, res) => {
    const { username } = req.body
    const { id } = req.user

    if (!username) {
        return res.status(400).send({ message: 'Username is required' })
    }

    try {

        const updatedUser = await User.findByIdAndUpdate(
            id, // pagal id suranda
            { username }, // atnaujina username
            { new : true} // issaugo
        )
        if (!updatedUser) {
            return res.status(404).send({message: 'User is not found'})
        }
        
        res.send({ message: 'User updated', user: updatedUser })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    register,
    login,
    updateUser
}