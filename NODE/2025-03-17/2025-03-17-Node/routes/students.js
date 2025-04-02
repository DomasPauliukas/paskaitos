const express = require('express')

// const app - pagrindinis failas
// const router - routerio failiukas. visur pervadiname siame kode i router. router.get / router.post ir t.t.

const router = express.Router()


const { getStudents, getStudentById, createStudent, updateStudent, deleteStudent } = require('../services/students')

const { getLanguages } = require('../services/languages')
const { getGroups } = require('../services/groups')


router.get('/students', async (req, res, next) => {
    const students = await getStudents()

    const data = {
        newStudentButton: {
            url: "/create-student",
            title: "New student"
        },
        students
    }
    res.render(`students`, data)
})

router.get('/students/:id',async (req, res, next) => {
    const { id } = req.params
    const foundStudent = await getStudentById(id)
    
    const data = {
        foundStudent
    }
    res.render('student', data)
})

router.get('/create-student',async (req, res, next) => {
    const groups = await getGroups()
    const languages = await getLanguages()
    res.render(`student-create`, { groups, languages })
})

router.post('/student-created', async (req, res, next) => {
    const { body } = req
    const interests = body.interests || []
    const languages = body.languages || [] 

    const createdStudent = await createStudent({
        ...body,
        interests,
        languages
    })

    res.redirect(`/students`)
})

router.post('/delete-student', async (req, res, next) => {
    const { studentId } = req.body
    await deleteStudent(studentId)

    res.redirect(`/students`)
})

router.get('/edit-student/:id',async (req, res, next) => {
    const { id } = req.params
    const groups = await getGroups()
    const languages = await getLanguages()
    const editedStudent = await getStudentById(id)
    const data = {
        editedStudent,
        groups,
        languages
    }
    res.render(`student-edit`, data)
})

router.post('/student-edited',async (req, res, next) => {
    const { body } = req
    const studentId = req.body._id

    const interests = body.interests || []
    const languages = body.languages || [] 

    const updatedStudent = await updateStudent({...body, interests, languages}, studentId)
    res.redirect(`/students/${studentId}`)
})

// exportuojame visa faila pabaigoje
module.exports = router