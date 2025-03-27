const express = require('express')

const router = express.Router()

const { getSubjects, getSubjectById, createSubject, updateSubject, deleteSubject } = require('../services/subjects')


router.get('/subjects', (req, res, next) => {
    const subjects = getSubjects()
    const data = { 
        subjects
    }
    res.render('subjects', data)
})

router.get('/subjects/:id', (req, res, next) => {
    const { id } = req.params
    const foundSubject = getSubjectById(id)
    const data = {
        foundSubject
    }
    res.render(`subject`, data)
    
})

router.get('/create-subject', (req, res, next) => {

    res.render(`subject-create`)
    
})

router.post('/subject-created', (req, res, next) => {
    const { body } = req
    const newSubject = createSubject(body)

    res.redirect(`/subjects/${newSubject.id}`)
})

router.get('/edit-subject/:id', (req, res, next) => {
    const { id } = req.params
    const editedSubject = getSubjectById(id)
    const data = {
        editedSubject
    }
    res.render(`subject-edit`, data)
})

router.post('/subject-edited', (req, res, next) => {
    const { body } = req
    const updatedSubject = updateSubject(body)
    res.redirect(`/subjects/${updatedSubject.id}`)
    
})

router.post('/delete-subject', (req, res, next) => {
    const { id } = req.body
    deleteSubject(id)
    res.redirect('/subjects')
})

module.exports = router