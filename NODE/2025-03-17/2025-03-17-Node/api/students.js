const express = require('express')

const router = express.Router()

const { getStudents, getStudentById, createStudent, updateStudent, deleteStudent } = require('../services/students')


router.get('/', (req, res, next) => {
    const data = getStudents()
    res.send(data)
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    const foundStudent = getStudentById(id)
    
    res.send(foundStudent)
})

router.post('/', (req, res, next) => {
    const { body } = req
    const newStudent = createStudent(body)

    res.send(newStudent)
})

router.put('/:id', (req, res, next) => {
    const { id } = req.params
    const { body } = req

    const updatedStudent = updateStudent({...body, id})

    res.send(updatedStudent)
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    deleteStudent(id)
    res.send({message: 'data was successfully removed', id})
})


module.exports = router