const express = require('express')

// const app - pagrindinis failas
// const router - routerio failiukas. visur pervadiname siame kode i router. router.get / router.post ir t.t.

const router = express.Router()
const { v4: uuid } = require('uuid')

const path = require('path')
const fs = require('fs')

// apacioje funkcija, kuri atnaujina data i json

// function getStudents() {
//     const filePath = path.join('db', 'students.json')
    
//     const fileContent = fs.readFileSync(filePath)
//     const data = JSON.parse(fileContent)
    
//     return data
// }

// function getStudentById (id) {
//     const students = getStudents()
    
//     return students.find(student => student.id === id)
    
// }

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

router.get('/students', (req, res, next) => {
    const students = getDataDB('students')

    const data = {
        newStudentButton: {
            url: "/create-student",
            title: "New student"
        },
        students
    }

    res.render(`students`, data)
})

router.get('/students/:id', (req, res, next) => {
    const students = getDataDB('students')
    const { id } = req.params
    const foundStudent = students.find(student => student.id === id)
    
    const data = {
        foundStudent,
        students
    }
    res.render('student', data)
})

router.get('/create-student', (req, res, next) => {
    res.render(`create-student`)
})

router.post('/student-created', (req, res, next) => {

// cia darome, kad visada butu Array objekte, nes jei pridedame viena interest sukurdavo stringa, jei nei vieno - visiskai nieko. dabar visada bus Array. O tai reikalinga nes masyvo ciklus leidziam.
    
    const interests = []

    if (req.body.interests) {
        if(typeof req.body.interests === 'string') {
            interests.push(req.body.interests)
        } else {
            interests.push(...req.body.interests)
        }
    }

    const newStudent = {...req.body, id: uuid(), interests}
    updatedDataDB('students', newStudent)
    // students.push(newStudent)

    res.redirect(`/students/${newStudent.id}`)
})

router.post('/delete-student', (req, res, next) => {
    const students = getDataDB('students')
    const { studentId } = req.body

    const filteredStudent = students.filter(student => student.id !== studentId)
    editDataDB('students', filteredStudent)
    res.redirect(`/students`)
})

router.get('/edit-student/:id', (req, res, next) => {
    const students = getDataDB('students')
    const { id } = req.params
    const editedStudent = students.find(student => student.id === id)
    const { name, surname, age, city, email, interests, newsletter } = editedStudent

    const data = {
        students,
        editedStudent
    }
    res.render(`edit-student`, data)
})

router.post('/student-edited', (req, res, next) => {
    const students = getDataDB('students')
    const { id } = req.body

    const updatedStudents = students.map(student => {
        if (student.id === id) {
            const interests = []
            if (req.body.interests) {
                if (typeof req.body.interests === 'string'){
                    interests.push(req.body.interests)
                } else {
                    interests.push(...req.body.interests)
                }
            }
            const updatedStudent = {
                ...student,
                ...req.body,
                interests,
            }

            return updatedStudent
        } else {
            return student
        }
    })
    editDataDB('students', updatedStudents)

    res.redirect(`/students/${id}`)
})

// exportuojame visa faila pabaigoje
module.exports = router