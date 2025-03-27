const path = require('path')
const fs = require('fs')

const { v4: uuid } = require('uuid')

// GET
function getLecturers() {
    const filePath = path.join('db', 'lecturers.json')

    if (!fs.existsSync(filePath)) {
        throw new Error('File does not exist')
    }

    const fileContent = fs.readFileSync(filePath)

    const data = JSON.parse(fileContent)

    return data
}

// GET
function getLecturerById(id) {
    const filePath = path.join('db', 'lecturers.json')

    if (!fs.existsSync(filePath)) {
        throw new Error('File does not exist')
    }

    const fileContent = fs.readFileSync(filePath)

    const lecturers = JSON.parse(fileContent)

    const foundLecturer = lecturers.find(lecturer => lecturer.id === id)

    return foundLecturer
}

// POST
function createLecturer(body) {
    const id = uuid()
    const subjects = []
    const groups = []

    if (body.subjects) {
        if (typeof body.subjects === 'string') {
            subjects.push(body.subjects)
        } else {
            subjects.push(...body.subjects)
        }
    }

    if (body.groups) {
        if (typeof body.groups === 'string') {
            groups.push(body.groups)
        } else {
            groups.push(...body.groups)
        }
    }

    const newLecturer = { 
        ...body,
        subjects,
        groups,
        id 
    }

    const lecturers = getLecturers()

    lecturers.push(newLecturer)
    
    const stringifiedData = JSON.stringify(lecturers, null, 2)
    
    const filePath = path.join('db', 'lecturers.json')
    fs.writeFileSync(filePath, stringifiedData)

    return newLecturer
}

// UPDATE
function updateLecturer(data) {
    const { id } = data

    const lecturers = getLecturers()

    const updatedLecturers = lecturers.map(lecturer => {
        if (lecturer.id === id) {
            const subjects = []
            const groups = []

            if (data.subjects) {
                if (typeof data.subjects === 'string') {
                    subjects.push(data.subjects)
                } else {
                    subjects.push(...data.subjects)
                }
            }
            if (data.groups) {
                if (typeof data.groups === 'string') {
                  groups.push(data.groups)
                } else {
                  groups.push(...data.groups)
                }
            }
        
            const updatedLecturer = { 
                ...data,
                subjects,
                groups
            }

            return updatedLecturer
        } else {
            return lecturer
        }
         
    })

    const stringifiedData = JSON.stringify(updatedLecturers, null, 2)
    
    const filePath = path.join('db', 'lecturers.json')
    fs.writeFileSync(filePath, stringifiedData)

    return data
}

// DELETE
function deleteLecturer(id) {
    const lecturers = getLecturers()
    const updatedLecturers = lecturers.filter(lecturer => lecturer.id !== id)
    
    const stringifiedData = JSON.stringify(updatedLecturers, null, 2)
    const filePath = path.join('db', 'lecturers.json')
    fs.writeFileSync(filePath, stringifiedData)
}

module.exports = {
    getLecturers,
    getLecturerById,
    createLecturer,
    updateLecturer,
    deleteLecturer
}