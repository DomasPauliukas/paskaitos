const express = require('express')

const router = express.Router()
const { getLecturers, getLecturerById, createLecturer, updateLecturer, deleteLecturer } = require('../services/lecturers')


router.get('/', (req, res, next) => {
    const lecturers = getLecturers()
    res.send(lecturers)

})

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    const foundLecturer = getLecturerById(id)

    res.send(foundLecturer)
})

router.post('/', (req, res, next) => {
    const { body } = req
    const createdLecturer = createLecturer(body)

    res.send(createdLecturer)
})

router.put('/:id', (req, res, next) => {
    const { id } = req.params
    const { body } = req
    const editedLecturer = updateLecturer({...body, id})

    res.send(editedLecturer)
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    deleteLecturer(id)

    res.send({message: 'data was successfully removed', id})
})

module.exports = router