const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}))

const { v4: uuid } = require('uuid')  // npm i uuid

// cia kodas kai isskaidome komponentus jau, kad rastu juos

const studentRoutes = require('./routes/students')
const groupRoutes = require('./routes/groups')
const languageRoutes = require('./routes/languages')
const lecturerRoutes = require('./routes/lecturers')
const subjectRoutes = require('./routes/subjects')


app.use(studentRoutes)
app.use(groupRoutes)
app.use(languageRoutes)
app.use(lecturerRoutes)
app.use(subjectRoutes)

// app.use('/v2/students', studentRoutes) 
// pirmas elementas naudojamas del routes prefix pvz - ('/v2/students')kad nustatyti, kad neriektu rasyti visiems to paties, tada prie nuorodu nereiktu visur to paties rasyti, uztektu /create, /edit, /id, /delete ir t.t.


// __dirname - rasomas kad butu visas kelias iki failo, serveriui jei reikia. bet nuo pagrindinio failo, ne is root.

app.use(express.static('public')) // pasiekia public serverio CSS visus

const path = require('path') // nuorodai iki failo
const fs = require('fs') // kartu reikia su path, rodo turini


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

const PORT = 3000
app.listen(PORT, () => {`App is running on port ${PORT}`})