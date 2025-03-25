const express = require('express')

const router = express.Router()
const { v4: uuid } = require('uuid')

const { getDataDB, updatedDataDB, editDataDB } = require('../services/FetchingData')


router.get('/', (req, res, next) => {
    const languages = getDataDB('languages')
    res.send(languages)
})

router.get('/:id', (req, res, next) => {
    const languages = getDataDB('languages')
    const { id } = req.params
    const selectedLanguage = languages.find(language => language.id === id)

    res.send(selectedLanguage)
})

router.post('/', (req, res, next) => {
    const newLanguage = {...req.body, id: uuid()}
    updatedDataDB('languages', newLanguage)

    res.send(newLanguage)
})

router.put('/:id', (req, res, next) => {
    const languages = getDataDB('languages')
    const { id } = req.params
    const editedLanguages = languages.map(language => {
        if (language.id === id) {
            return {...language, ...req.body}
        } else {
            return language
        }
    })
    editDataDB('languages', editedLanguages)

    res.send(editedLanguages)
})

router.delete('/:id', (req, res, next) => {
    const languages = getDataDB('languages')
    const { id } = req.params
    const deletedLanguage = languages.filter(language => language.id !== id)
    editDataDB('languages', deletedLanguage)

    res.send(deletedLanguage)
})

module.exports = router