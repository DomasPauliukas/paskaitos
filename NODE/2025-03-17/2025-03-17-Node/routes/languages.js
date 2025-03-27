const express = require('express')

const router = express.Router()

const { getLanguages, getLanguageById, createLanguage, updateLanguage, deleteLanguage } = require('../services/languages')

router.get('/languages', (req, res, next) => {
    const languages = getLanguages()
    const data = {
        languages
    }
    res.render(`languages`, data)
})

router.get('/languages/:id', (req, res, next) => {
    const { id } = req.params
    const selectedLanguage = getLanguageById(id)
    const data = {
        selectedLanguage
    }
    res.render(`language`, data)
})

router.get('/create-language', (req, res, next) => {

    res.render(`language-create`)
})

router.post('/language-created', (req, res, next) => {
    const { body } = req
    const newLanguage = createLanguage(body)

    res.redirect(`/languages/${newLanguage.id}`)
})

router.get('/edit-language/:id', (req, res, next) => {
    const { id } = req.params
    const editedLanguage = getLanguageById(id)
    const data = {
        editedLanguage
    }
    res.render(`language-edit`, data)
})

router.post('/language-edited', (req, res, next) => {
    const { body } = req
    const updatedLanguage = updateLanguage(body)

    res.redirect(`/languages/${updatedLanguage.id}`)
})

router.post('/delete-language', (req, res, next) => {
    const { id } = req.body
    deleteLanguage(id)
    res.redirect('/languages')
})

module.exports = router