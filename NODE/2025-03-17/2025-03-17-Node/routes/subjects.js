const express = require('express')

const router = express.Router()

const { getSubjects, getSubjectById, createSubject, updateSubject, deleteSubject } = require('../services/subjects')


router.get('/subjects',async (req, res, next) => {
    const subjects = await getSubjects()
    const data = { 
        subjects
    }
    res.render('subjects', data)
})

router.get('/subjects/:id',async (req, res, next) => {
    const { id } = req.params
    const foundSubject = await getSubjectById(id)
    const data = {
        foundSubject
    }
    res.render(`subject`, data)
    
})

router.get('/create-subject', (req, res, next) => {

    res.render(`subject-create`)
    
})

router.post('/subject-created',async (req, res, next) => {
    const { body } = req
    const newSubject = await createSubject(body)

    res.redirect(`/subjects/${newSubject.id}`)
})

router.get('/edit-subject/:id',async (req, res, next) => {
    const { id } = req.params
    const editedSubject = await getSubjectById(id)
    const data = {
        editedSubject
    }
    res.render(`subject-edit`, data)
})

router.post('/subject-edited',async (req, res, next) => {
    const { body } = req
    const updatedSubject = await updateSubject(body)
    res.redirect(`/subjects/${updatedSubject.id}`)
    
})

router.post('/delete-subject',async (req, res, next) => {
    const { id } = req.body
    await deleteSubject(id)
    res.redirect('/subjects')
})

module.exports = router