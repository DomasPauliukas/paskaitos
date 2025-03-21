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


router.get('/subjects', (req, res, next) => {
    const subjects = getDataDB('subjects')
    const subjectsList = subjects.map(subject => `<li><a href="/subjects/${subject.id}">${subject.subject}</a></li>`).join('')
    res.send(`
        <a href="/">Go back to home page</a>
        <a href="/create-subject">Create subject</a>
        <h1>Subjects:</h1>
        <ul>${subjectsList}</ul>
        `)
})

router.get('/subjects/:id', (req, res, next) => {
    const subjects = getDataDB('subjects')
    const { id } = req.params
    const selectedSubject = subjects.find(subject => subject.id === id)

    res.send(`
        <a href="/">Go back to home page</a>
        <h1>${selectedSubject.subject}</h1>
        <a href="/edit-subject/${id}">Edit subject</a>
        <form action="/delete-subject" method="POST">
            <input type="hidden" name="id" value="${id}"/>
            <button type="submit">Delete subject</button>
        </form>
        `)
    
})

router.get('/create-subject', (req, res, next) => {

    res.send(`
        <h1>Create subject:</h1>
        <form action="/subject-created" method="POST">
            <div>
                <label for="subject">Subject name:</label>
                <input type="text" name="subject" id="subject"/>

                <button type="submit">Create</button>
            </div>
        </form>
        `)
    
})

router.post('/subject-created', (req, res, next) => {
    const newSubject = {...req.body, id: uuid()}
    updatedDataDB('subjects', newSubject)

    res.redirect('/subjects')
})

router.get('/edit-subject/:id', (req, res, next) => {
    const subjects = getDataDB('subjects')
    const { id } = req.params
    const editedSubject = subjects.find(subject => subject.id === id)
    
    res.send(`
        <h1>Edit subject:</h1>
        <form action="/subject-edited" method="POST">
            <div>
                <label for="subject">Subject name:</label>
                <input type="text" name="subject" id="subject" value="${editedSubject.subject}"/>

                <input type="hidden" name="id" value="${id}"/>
                <button type="submit">Edit</button>
            </div>
        </form>
        `)
})

router.post('/subject-edited', (req, res, next) => {
    const subjects = getDataDB('subjects')
    const { id } = req.body
    const editedSubject = subjects.map(subject => {
        if (subject.id === id) {
            return req.body
        } else {
            return subject
        }
    })
    editDataDB('subjects', editedSubject)
    res.redirect('/subjects')
    
})

router.post('/delete-subject', (req, res, next) => {
    const subjects = getDataDB('subjects')
    const { id } = req.body
    const newSubjects = subjects.filter(subject => subject.id !== id)
    editDataDB('subjects', newSubjects)

    res.redirect('/subjects')
})

module.exports = router