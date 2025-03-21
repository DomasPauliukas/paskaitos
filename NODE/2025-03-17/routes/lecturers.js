const express = require('express')

const router = express.Router()

const { v4: uuid } = require('uuid')

const path = require('path')
const fs = require('fs')

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


router.get('/lecturers', (req, res, next) => {
    const lecturers = getDataDB('lecturers')
    const lecturersList = lecturers.map(lecturer => `<li><a href="/lecturers/${lecturer.id}">${lecturer.firstName} ${lecturer.lastName}</a></li>`).join('')

    res.send(`
        <a href="/">Go back to home page</a>
        <h1>Lecturers:</h1>
        <ul>${lecturersList}</ul>
        <a href="/create-lecturer">Create lecturer</a>
        `)
})

router.get('/lecturers/:id', (req, res, next) => {
    const lecturers = getDataDB('lecturers')
    const { id } = req.params
    const selectedLecturer = lecturers.find(lecturer => lecturer.id === id)
    const { firstName, lastName, department, email, yearsOfExperience, office } = selectedLecturer
    res.send(`
        <a href="/">Go back to home page</a>
        <h1>Lecturer</h1>
        <ul>
            <li>First name: ${firstName}</li>
            <li>Last name: ${lastName}</li>
            <li>Department: ${department}</li>
            <li>Email: ${email}</li>
            <li>Experience: ${yearsOfExperience}</li>
            <li>Office: ${office}</li>
        </ul>

        <a href="/edit-lecturer/${id}">Edit lecturer</a>
        <form action="/delete-lecturer" method="POST">
            <input type="hidden" name="id" value="${id}"/>
            <button type="submit">Delete lecturer</button>
        </form>
        `)
})

router.get('/create-lecturer', (req, res, next) => {

    res.send(`
        <h1>Create lecturer:</h1>
        <form action="/lecturer-created" method="POST">
            <div>
                <label for="firstName">First name:</label>
                <input type="firstName" name="firstName" id="firstName"/>
            </div>
            <div>
                <label for="lastName">Last name:</label>
                <input type="lastName" name="lastName" id="lastName"/>
            </div>
            <div>
                <label for="department">Department:</label>
                <input type="department" name="department" id="department"/>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div>
                <label for="yearsOfExperience">Experience (years):</label>
                <input type="yearsOfExperience" name="yearsOfExperience" id="yearsOfExperience"/>
            </div>
            <div>
                <label for="office">Office:</label>
                <input type="office" name="office" id="office"/>
            </div>

            <button type="submit">Create lecturer</button>
        </form>
        `)
})

router.post('/lecturer-created', (req, res, next) => {
    const createdLecturers = {...req.body, id: uuid()}
    updatedDataDB('lecturers', createdLecturers)

    res.redirect('/lecturers')
})

router.get('/edit-lecturer/:id', (req, res, next) => {
    const lecturers = getDataDB('lecturers')
    const { id } = req.params
    const editedLecturer = lecturers.find(lecturer => lecturer.id === id)
    const { firstName, lastName, department, email, yearsOfExperience, office } = editedLecturer

    res.send(`
        <h1>Edit lecturer:</h1>
        <form action="/lecturer-edited" method="POST">
            <div>
                <label for="firstName">First name:</label>
                <input type="firstName" name="firstName" id="firstName" value="${firstName}"/>
            </div>
            <div>
                <label for="lastName">Last name:</label>
                <input type="lastName" name="lastName" id="lastName" value="${lastName}"/>
            </div>
            <div>
                <label for="department">Department:</label>
                <input type="department" name="department" id="department" value="${department}"/>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" value="${email}"/>
            </div>
            <div>
                <label for="yearsOfExperience">Experience (years):</label>
                <input type="yearsOfExperience" name="yearsOfExperience" id="yearsOfExperience" value="${yearsOfExperience}"/>
            </div>
            <div>
                <label for="office">Office:</label>
                <input type="office" name="office" id="office" value="${office}"/>
            </div>

            <input type="hidden" name="id" value="${id}"/>
            <button type="submit">Edit lecturer</button>
        </form>
        
        `)
})

router.post('/lecturer-edited', (req, res, next) => {
    const lecturers = getDataDB('lecturers')
    const { id } = req.body
    const editedLecturers = lecturers.map(lecturer => {
        if(lecturer.id === id) {
            return req.body
        } else {
            return lecturer
        }
    })
    editDataDB('lecturers', editedLecturers)
    res.redirect('/lecturers')
})

router.post('/delete-lecturer', (req, res, next) => {
    const lecturers = getDataDB('lecturers')
    const { id } = req.body

    const deletedLecturer = lecturers.filter(lecturer => lecturer.id !== id)
    editDataDB('lecturers', deletedLecturer)

    res.redirect('/lecturers')
})

module.exports = router