const express = require('express')

const router = express.Router()
const { v4: uuid } = require('uuid')

const { getDataDB, updatedDataDB, editDataDB } = require('../services/FetchingData')


router.get('/', (req, res, next) => {
    const data = getDataDB('students')
    res.send(data)
})

router.get('/:id', (req, res, next) => {
    const students = getDataDB('students')
    const { id } = req.params
    const foundStudent = students.find(student => student.id === id)
    
    res.send(foundStudent)
})

router.post('/', (req, res, next) => {
    // cia req.body yra json formatu, veikia nes paraseme app.use(express.json()), o auksciau kur raseme req.body (router.post - create-student), jis yra isimtas is formos.

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

    res.send(newStudent)
})

router.put('/:id', (req, res, next) => {
    const students = getDataDB('students')
    const { id } = req.params

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

    res.send(updatedStudents)
})

router.delete('/:id', (req, res, next) => {
    const students = getDataDB('students')
    const { id } = req.params

    const filteredStudent = students.filter(student => student.id !== id)
    editDataDB('students', filteredStudent)
    res.send({message: 'data was successfully removed', id})
})


module.exports = router