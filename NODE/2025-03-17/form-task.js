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

// npm i ejs // html rasymui 

// __dirname - rasomas kad butu visas kelias iki failo, serveriui jei reikia. bet nuo pagrindinio failo, ne is root.


const path = require('path') // nuorodai iki failo
const fs = require('fs') // kartu reikia su path, rodo turini


const filePath = path.join('db', 'students.json')
const fileContent = fs.readFileSync(filePath)

const data = JSON.parse(fileContent) // kad matytume. paskui stringify darome keliant atgal i json

const stringifiedData = JSON.stringify(data, null, 2) // null, 2 - del skaitomesnes strukturos json faile.

fs.writeFileSync(filePath, stringifiedData) // viska atnaujins ir sukels i json faila.


// if(!fs.existsSync(studentPath)) {
//     return ......
// }

// galima funkcijas susikurti atskirai kiekvienam endpointui, pvz apacioje pagal updatedDataDB ir getDataDB.

// apacioje funkcija, kuri atnaujina data i json

function updatedDataDB (endpoint, item) {
    const filePath = path.join('db', endpoint + '.json')
    const data = getDataDB(endpoint)
    
    data.push(item)
    
    const stringifiedData = JSON.stringify(data, null, 2)
    
    fs.writeFileSync(filePath, stringifiedData)
}

function editDataDB (endpoint, editedData) {
    const filePath = path.join('db', endpoint + '.json')

    const stringifiedData = JSON.stringify(editedData, null, 2)
    
    fs.writeFileSync(filePath, stringifiedData)
}

function getDataDB (endpoint) {
    const filePath = path.join('db', endpoint + '.json')
//patikriname ar yra toks endpoint
if (!fs.existsSync(filePath)) {
    throw new Error('File does not exist')
}

    const fileContent = fs.readFileSync(filePath)
    const data = JSON.parse(fileContent)

    return data
}


app.get('/', (req, res, next) => {
    res.send(`
        <h1>Welcome</h1>
        <ul>
            <li><a href="/students">Student's List</a></li>
            <li><a href="/groups">Groups</a></li>
            <li><a href="/languages">Languages</a></li>
            <li><a href="/lecturers">Lecturers</a></li>
            <li><a href="/subjects">Subjects</a></li>
        </ul>
        `)
})

// pasakom kad naudosim ejs engine, ir tada kuriame folderyje bus.
app.set('view engine', 'ejs')
app.set('views', path.join('views'))



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