const express = require('express')

const router = express.Router()

const { v4: uuid } = require('uuid')

const { getDataDB, updatedDataDB, editDataDB } = require('../services/FetchingData')


router.get('/', (req, res, next) => {
    const subjects = getDataDB('subjects')
    res.send(subjects)
})

router.get('/:id', (req, res, next) => {
    const subjects = getDataDB('subjects')
    const { id } = req.params
    const selectedSubject = subjects.find(subject => subject.id === id)

    res.send(selectedSubject)
})

router.post('/', (req, res, next) => {
    const newSubject = {...req.body, id: uuid()}
    updatedDataDB('subjects', newSubject)

    res.send(newSubject)

})

router.put('/:id', (req, res, next) => {
    const subjects = getDataDB('subjects')
    const { id } = req.params
    const editedSubject = subjects.map(subject => {
        if (subject.id === id) {
            return {...subject, ...req.body}
        } else {
            return subject
        }
    })
    editDataDB('subjects', editedSubject)

    res.send(editedSubject)
})

router.delete('/:id', (req, res, next) => {
    const subjects = getDataDB('subjects')
    const { id } = req.params
    const newSubjects = subjects.filter(subject => subject.id !== id)
    editDataDB('subjects', newSubjects)

    res.send(newSubjects)
})

module.exports = router