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
    const data = { 
        subjects
    }
    res.render('subjects', data)
})

router.get('/subjects/:id', (req, res, next) => {
    const subjects = getDataDB('subjects')
    const { id } = req.params
    const selectedSubject = subjects.find(subject => subject.id === id)
    const data = {
        selectedSubject
    }
    res.render(`subject`, data)
    
})

router.get('/create-subject', (req, res, next) => {

    res.render(`subject-create`)
    
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
    const data = {
        editedSubject
    }
    res.render(`subject-edit`, data)
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