const path = require('path')
const fs = require('fs')

const { v4: uuid } = require('uuid')

// GET
function getSubjects() {
    const filePath = path.join('db', 'subjects.json')

    if (!fs.existsSync(filePath)) {
        throw new Error('File does not exist')
    }

    const fileContent = fs.readFileSync(filePath)

    const data = JSON.parse(fileContent)

    return data
}

// GET
function getSubjectById(id) {
    const filePath = path.join('db', 'subjects.json')

    if (!fs.existsSync(filePath)) {
        throw new Error('File does not exist')
    }

    const fileContent = fs.readFileSync(filePath)

    const subjects = JSON.parse(fileContent)

    const foundSubject = subjects.find(subject => subject.id === id)

    return foundSubject
}

// POST
function createSubject(body) {
    const id = uuid()

    const newSubject = { 
        ...body,
        id 
    }

    const subjects = getSubjects()

    subjects.push(newSubject)
    
    const stringifiedData = JSON.stringify(subjects, null, 2)
    
    const filePath = path.join('db', 'subjects.json')
    fs.writeFileSync(filePath, stringifiedData)

    return newSubject
}

// UPDATE
function updateSubject(data) {
    const { id } = data

    const subjects = getSubjects()

    const editedSubject = subjects.map(subject => {
        if (subject.id === id) {
            return {...data}
        } else {
            return subject
        }
    })

    const stringifiedData = JSON.stringify(editedSubject, null, 2)
    
    const filePath = path.join('db', 'subjects.json')
    fs.writeFileSync(filePath, stringifiedData)

    return data
}

// DELETE
function deleteSubject(id) {
    const subjects = getSubjects()
    const updatedSubjects = subjects.filter(subject => subject.id !== id)
    
    const stringifiedData = JSON.stringify(updatedSubjects, null, 2)
    const filePath = path.join('db', 'subjects.json')
    fs.writeFileSync(filePath, stringifiedData)
}

module.exports = {
    getSubjects,
    getSubjectById,
    createSubject,
    updateSubject,
    deleteSubject
}