const express = require('express')

// const app - pagrindinis failas
// const router - routerio failiukas. visur pervadiname siame kode i router. router.get / router.post ir t.t.

const router = express.Router()


const { getDataDB } = require('../services/FetchingData')
const { getStudents, getStudentById, createStudent, updateStudent, deleteStudent } = require('../services/students')

const groups = getDataDB('groups')
const languages = getDataDB('languages')


router.get('/students', (req, res, next) => {
    const students = getStudents()

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
    const { id } = req.params
    const foundStudent = getStudentById(id)
    
    const data = {
        foundStudent
    }
    res.render('student', data)
})

router.get('/create-student', (req, res, next) => {
    res.render(`student-create`, { groups, languages })
})

router.post('/student-created', (req, res, next) => {
    const { body } = req
    const createdStudent = createStudent(body)

    res.redirect(`/students/${createdStudent.id}`)
})

router.post('/delete-student', (req, res, next) => {
    const { studentId } = req.body
    deleteStudent(studentId)

    res.redirect(`/students`)
})

router.get('/edit-student/:id', (req, res, next) => {
    const { id } = req.params
    const editedStudent = getStudentById(id)

    const data = {
        editedStudent,
        groups,
        languages
    }
    res.render(`student-edit`, data)
})

router.post('/student-edited', (req, res, next) => {
    const { body } = req
    const updatedStudent = updateStudent(body)

    res.redirect(`/students/${updatedStudent.id}`)
})

// exportuojame visa faila pabaigoje
module.exports = router