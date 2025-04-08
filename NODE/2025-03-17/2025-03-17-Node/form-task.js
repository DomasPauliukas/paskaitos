const express = require('express')
const cors = require('cors') // npm i cors. kad is backendo eitu fetchinti frontende.
const process = require('process')

// npm install nodemon -- watchina node, jsone prie paleidimo nebe node --watch, o nodemon 

require('dotenv').config() // kad veiktu .env failas  npm i dotenv
require('./database') //visa folderi importuoja (su Mongoose dirbam)

const app = express()

app.use(cors())
app.use(express.json()) // kad veiktu POST metodas per API

//bodyParser nauja versija, jei raso deprecated, tai imame is express pacio, nebereikia pacio bodyParses instaliuoti, tada butu express.urlencoded. o pacio const bodyParser = require('') - nebereiketu.!!!!!
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}))


const { v4: uuid } = require('uuid')  // npm i uuid

// cia kodas kai isskaidome komponentus jau, kad rastu juos

const studentRoutes = require('./routes/students')
const studentAPIRoutes = require('./api/students')

const groupRoutes = require('./routes/groups')
const groupAPIRoutes = require('./api/groups')

const languageRoutes = require('./routes/languages')
const languageAPIRoutes = require('./api/languages')

const lecturerRoutes = require('./routes/lecturers')
const lecturerAPIRoutes = require('./api/lecturers')

const subjectRoutes = require('./routes/subjects')
const subjectAPIRoutes = require('./api/subjects')

const userApiRoutes = require('./api/users')

app.use('/api/users', userApiRoutes)

app.use(studentRoutes)
app.use('/api/students', studentAPIRoutes) // prefix nustatome, visur pradzia vienoda ,nebereikia rasyti visiems routeriams.

app.use(groupRoutes)
app.use('/api/groups', groupAPIRoutes)

app.use(languageRoutes)
app.use('/api/languages', languageAPIRoutes)

app.use(lecturerRoutes)
app.use('/api/lecturers', lecturerAPIRoutes)

app.use(subjectRoutes)
app.use('/api/subjects', subjectAPIRoutes)

// app.use('/v2/students', studentRoutes) 
// pirmas elementas naudojamas del routes prefix pvz - ('/v2/students')kad nustatyti, kad neriektu rasyti visiems to paties, tada prie nuorodu nereiktu visur to paties rasyti, uztektu /create, /edit, /id, /delete ir t.t.


// __dirname - rasomas kad butu visas kelias iki failo, serveriui jei reikia. bet nuo pagrindinio failo, ne is root.

app.use(express.static('public')) // pasiekia public serverio CSS visus

const path = require('path') // nuorodai iki failo
const fs = require('fs') // kartu reikia su path, rodo turini
const authMiddleware = require('./middlewares/authMiddleware')

// const { connectToDB } = require('./database') 



// cia man rodos nebereikia kai su MongoDB dirbam kodo apacioje

const filePath = path.join('db', 'students.json')
const fileContent = fs.readFileSync(filePath)

const data = JSON.parse(fileContent) // kad matytume. paskui stringify darome keliant atgal i json

const stringifiedData = JSON.stringify(data, null, 2) // null, 2 - del skaitomesnes strukturos json faile.

fs.writeFileSync(filePath, stringifiedData) // viska atnaujins ir sukels i json faila


// npm i ejs // html rasymui 
// pasakom kad naudosim ejs engine, ir tada kuriame folderyje bus.

app.set('view engine', 'ejs')
app.set('views', path.join('views'))

app.locals.siteTitle = 'My page' // cia kuriamas globalus kintamasis
app.locals.currentYear = new Date().getFullYear()

app.get('/', (req, res, next) => {
    res.render(`index`) // rasome render cia
})

// su Mongoose testinam
app.get('/test', (req, res, next) => {
    res.send('Hello')
})



// app.get('/', (req, res, next) => {
//     const data = {
//         studentsLength: students.length
//     }
//     res.render(`index`, data) 
// })
    // pirmas key - failas, 2 - objektas su properties ka norim perduoti, objekta sukuriame auksciau, "data", o ejs issimame ta value su <%= studentsLength %>)


app.get('*', (req, res, next) => {
    res.send(`
        <h1>Page not found</h1>
        <a href="/">Go back to home page</a>
        `)
})

// const PORT = process.env.PORT // is .env failo, kuriame saugomos konstaintos, keys ir pan.  
const PORT = process.env.PORT || 3000
 //BE MONGO DB
app.listen(PORT, () => console.log(`App is running on port ${PORT}`))



// SU MONGODB
// connectToDB()
//     .then(() => {
//         app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`))
//     })
//     .catch(error => {
//         console.error('Failed to connect to MongoDB: ', error)
//     })