const express = require('express')

const router = express.Router()

const { v4: uuid } = require('uuid')

const { getDataDB, updatedDataDB, editDataDB } = require('../services/FetchingData')

router.get('/languages', (req, res, next) => {
    const languages = getDataDB('languages')
    const data = {
        languages
    }
    res.render(`languages`, data)
})

router.get('/languages/:id', (req, res, next) => {
    const languages = getDataDB('languages')
    const { id } = req.params
    const selectedLanguage = languages.find(language => language.id === id)
    const data = {
        selectedLanguage
    }
    res.render(`language`, data)
})

router.get('/create-language', (req, res, next) => {

    res.render(`language-create`)
})

router.post('/language-created', (req, res, next) => {
    const newLanguage = {...req.body, id: uuid()}
    updatedDataDB('languages', newLanguage)

    res.redirect('/languages')
})

router.get('/edit-language/:id', (req, res, next) => {
    const languages = getDataDB('languages')
    const { id } = req.params
    const editedLanguage = languages.find(language => language.id === id)
    const data = {
        editedLanguage
    }
    res.render(`language-edit`, data)
})

router.post('/language-edited', (req, res, next) => {
    const languages = getDataDB('languages')
    const { id } = req.body
    const editedLanguages = languages.map(language => {
        if (language.id === id) {
            return req.body
        } else {
            return language
        }
    })
    editDataDB('languages', editedLanguages)

    res.redirect(`/languages`)
})

router.post('/delete-language', (req, res, next) => {
    const languages = getDataDB('languages')
    const { id } = req.body
    console.log(id)
    console.log(languages)
    const deletedLanguage = languages.filter(language => language.id !== id)
    editDataDB('languages', deletedLanguage)
    res.redirect('/languages')
})

module.exports = router