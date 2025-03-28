const express = require('express')

const router = express.Router()

const { createLecturer, getLecturers, getLecturerById, updateLecturer, deleteLecturer } = require('../services/lecturers')
const { getSubjects } = require('../services/subjects')
const { getGroups } = require('../services/groups')


router.get('/lecturers',async (req, res, next) => {
    const lecturers = await getLecturers()
    const data = {
        lecturers
    }
    res.render(`lecturers`, data)
})

router.get('/lecturers/:id',async (req, res, next) => {
    const { id } = req.params
    const foundLecturer = await getLecturerById(id)
    const data = {
        foundLecturer
    }
    res.render(`lecturer`, data)
})

router.get('/create-lecturer',async (req, res, next) => {
    const subjects = await getSubjects()
    const groups = await getGroups()

    res.render(`lecturer-create`, { subjects, groups })
})

router.post('/lecturer-created',async (req, res, next) => {
    const { body } = req

    const createdLecturer = await createLecturer(body)

    res.redirect(`/lecturers/${createdLecturer.id}`)
})

router.get('/edit-lecturer/:id',async (req, res, next) => {
    const subjects = await getSubjects()
    const groups = await getGroups()
    
    const { id } = req.params
    const editedLecturer = await getLecturerById(id)
    const data = {
        editedLecturer,
        subjects,
        groups
    }
    res.render(`lecturer-edit`, data)
})

router.post('/lecturer-edited',async (req, res, next) => {
    const { body } = req
    const editedLecturers = await updateLecturer(body)

    res.redirect(`/lecturers/${editedLecturers.id}`)
})

router.post('/delete-lecturer',async (req, res, next) => {
    const { id } = req.body
    await deleteLecturer(id)

    res.redirect('/lecturers')
})

module.exports = router