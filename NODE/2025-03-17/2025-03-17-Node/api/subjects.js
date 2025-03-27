const express = require('express')

const router = express.Router()

const { getSubjects, getSubjectById, createSubject, updateSubject, deleteSubject } = require('../services/subjects')


router.get('/', (req, res, next) => {
    const subjects = getSubjects()
    res.send(subjects)
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    const foundSubject = getSubjectById(id)

    res.send(foundSubject)
})

router.post('/', (req, res, next) => {
    const { body } = req
    const newSubject = createSubject(body)

    res.send(newSubject)
})

router.put('/:id', (req, res, next) => {
    const { id } = req.params
    const { body } = req
    const editedSubject = updateSubject({...body, id})

    res.send(editedSubject)
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    deleteSubject(id)

    res.send({message: 'data was successfully removed', id})
})

module.exports = router