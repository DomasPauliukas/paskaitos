const express = require('express')

const router = express.Router()
const { v4: uuid } = require('uuid')

const { getDataDB, updatedDataDB, editDataDB } = require('../services/FetchingData')


router.get('/', (req, res, next) => {
    const lecturers = getDataDB('lecturers')
    res.send(lecturers)

})

router.get('/:id', (req, res, next) => {
    const lecturers = getDataDB('lecturers')
    const { id } = req.params
    const selectedLecturer = lecturers.find(lecturer => lecturer.id === id)

    res.send(selectedLecturer)
})

router.post('/', (req, res, next) => {
    const createdLecturers = {...req.body, id: uuid()}
    updatedDataDB('lecturers', createdLecturers)

    res.send(createdLecturers)
})

router.put('/:id', (req, res, next) => {
    const lecturers = getDataDB('lecturers')
    const { id } = req.params
    const editedLecturers = lecturers.map(lecturer => {
        if(lecturer.id === id) {
            return {...lecturer, ...req.body}
        } else {
            return lecturer
        }
    })
    editDataDB('lecturers', editedLecturers)

    res.send(editedLecturers)
})

router.delete('/:id', (req, res, next) => {
    const lecturers = getDataDB('lecturers')
    const { id } = req.params

    const deletedLecturer = lecturers.filter(lecturer => lecturer.id !== id)
    editDataDB('lecturers', deletedLecturer)

    res.send(deletedLecturer)
})

module.exports = router