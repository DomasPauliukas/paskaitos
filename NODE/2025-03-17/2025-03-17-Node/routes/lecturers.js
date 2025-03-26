const express = require('express')

const router = express.Router()

const { v4: uuid } = require('uuid')

const { getDataDB, updatedDataDB, editDataDB } = require('../services/FetchingData')

const subjects = getDataDB('subjects')
const groups = getDataDB('groups')

router.get('/lecturers', (req, res, next) => {
    const lecturers = getDataDB('lecturers')
    const data = {
        lecturers
    }
    res.render(`lecturers`, data)
})

router.get('/lecturers/:id', (req, res, next) => {
    const lecturers = getDataDB('lecturers')
    const { id } = req.params
    const selectedLecturer = lecturers.find(lecturer => lecturer.id === id)
    const data = {
        selectedLecturer
    }
    res.render(`lecturer`, data)
})

router.get('/create-lecturer', (req, res, next) => {

    res.render(`lecturer-create`, { subjects, groups })
})

router.post('/lecturer-created', (req, res, next) => {
    const subjects = []
    const groups = []

    if (req.body.subjects) {
        if (typeof req.body.subjects === 'string') {
            subjects.push(req.body.subjects)
        } else {
            subjects.push(...req.body.subjects)
        }
    }

    if (req.body.groups) {
        if (typeof req.body.groups === 'string') {
            groups.push(req.body.groups)
        } else {
            groups.push(...req.body.groups)
        }
    }
    const createdLecturers = {...req.body, id: uuid(), subjects, groups}
    updatedDataDB('lecturers', createdLecturers)

    res.redirect('/lecturers')
})

router.get('/edit-lecturer/:id', (req, res, next) => {
    const lecturers = getDataDB('lecturers')
    const { id } = req.params
    const editedLecturer = lecturers.find(lecturer => lecturer.id === id)
    const data = {
        editedLecturer,
        subjects,
        groups
    }
    res.render(`lecturer-edit`, data)
})

router.post('/lecturer-edited', (req, res, next) => {
    const lecturers = getDataDB('lecturers')
    const { id } = req.body
    let subjects = []
    let groups = []

    if (req.body.subjects) {
        if (typeof req.body.subjects === 'string') {
            subjects.push(req.body.subjects)
        } else {
            subjects.push(...req.body.subjects)
        }
    }

    if (req.body.groups) {
        if (typeof req.body.groups === 'string') {
            groups.push(req.body.groups)
        } else {
            groups.push(...req.body.groups)
        }
    }

    const editedLecturers = lecturers.map(lecturer => {
        if(lecturer.id === id) {
            return {...req.body, subjects, groups}
        } else {
            return lecturer
        }
    })
    editDataDB('lecturers', editedLecturers)
    res.redirect('/lecturers')
})

router.post('/delete-lecturer', (req, res, next) => {
    const lecturers = getDataDB('lecturers')
    const { id } = req.body

    const deletedLecturer = lecturers.filter(lecturer => lecturer.id !== id)
    editDataDB('lecturers', deletedLecturer)

    res.redirect('/lecturers')
})

module.exports = router