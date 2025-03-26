const express = require('express')

// const app - pagrindinis failas
// const router - routerio failiukas. visur pervadiname siame kode i router. router.get / router.post ir t.t.

const router = express.Router()
const { v4: uuid } = require('uuid')


const { getDataDB, updatedDataDB, editDataDB } = require('../services/FetchingData')

const groups = getDataDB('groups')
const languages = getDataDB('languages')

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
        foundStudent
    }
    res.render('student', data)
})

router.get('/create-student', (req, res, next) => {
    res.render(`student-create`, { groups, languages })
})

router.post('/student-created', (req, res, next) => {

// cia darome, kad visada butu Array objekte, nes jei pridedame viena interest sukurdavo stringa, jei nei vieno - visiskai nieko. dabar visada bus Array. O tai reikalinga nes masyvo ciklus leidziam.
    
    const interests = []
    const languages = []

    if (req.body.interests) {
        if(typeof req.body.interests === 'string') {
            interests.push(req.body.interests)
        } else {
            interests.push(...req.body.interests)
        }
    }
    if (req.body.languages) {
        if (typeof req.body.languages === 'string') {
          languages.push(req.body.languages) // if a single language is selected
        } else {
          languages.push(...req.body.languages) // multiple languages selected
        }
      }

    const newStudent = {...req.body, age: Number(req.body.age), id: uuid(), interests, languages}
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

    const data = {
        students,
        editedStudent,
        groups,
        languages
    }
    res.render(`student-edit`, data)
})

router.post('/student-edited', (req, res, next) => {
    const students = getDataDB('students')
    const { id } = req.body

    const updatedStudents = students.map(student => {
        if (student.id === id) {
            const interests = []
            const languages = []
            if (req.body.interests) {
                if (typeof req.body.interests === 'string'){
                    interests.push(req.body.interests)
                } else {
                    interests.push(...req.body.interests)
                }
            }
            if (req.body.languages) {
                if (typeof req.body.languages === 'string') {
                  languages.push(req.body.languages)
                } else {
                  languages.push(...req.body.languages)
                }
            }
            const updatedStudent = {
                ...req.body,
                age: Number(req.body.age),
                interests,
                languages
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