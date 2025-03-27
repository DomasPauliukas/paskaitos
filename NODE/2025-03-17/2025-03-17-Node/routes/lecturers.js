const express = require('express')

const router = express.Router()

const { getDataDB } = require('../services/FetchingData')
const { createLecturer, getLecturers, getLecturerById, updateLecturer, deleteLecturer } = require('../services/lecturers')

const subjects = getDataDB('subjects')
const groups = getDataDB('groups')

router.get('/lecturers', (req, res, next) => {
    const lecturers = getLecturers()
    const data = {
        lecturers
    }
    res.render(`lecturers`, data)
})

router.get('/lecturers/:id', (req, res, next) => {
    const { id } = req.params
    const foundLecturer = getLecturerById(id)
    const data = {
        foundLecturer
    }
    res.render(`lecturer`, data)
})

router.get('/create-lecturer', (req, res, next) => {

    res.render(`lecturer-create`, { subjects, groups })
})

router.post('/lecturer-created', (req, res, next) => {
    const { body } = req

    const createdLecturer = createLecturer(body)

    res.redirect(`/lecturers/${createdLecturer.id}`)
})

router.get('/edit-lecturer/:id', (req, res, next) => {
    const { id } = req.params
    const editedLecturer = getLecturerById(id)
    const data = {
        editedLecturer,
        subjects,
        groups
    }
    res.render(`lecturer-edit`, data)
})

router.post('/lecturer-edited', (req, res, next) => {
    const { body } = req
    const editedLecturers = updateLecturer(body)

    res.redirect(`/lecturers/${editedLecturers.id}`)
})

router.post('/delete-lecturer', (req, res, next) => {
    const { id } = req.body
    deleteLecturer(id)

    res.redirect('/lecturers')
})

module.exports = router