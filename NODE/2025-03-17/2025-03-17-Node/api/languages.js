const express = require('express')

const router = express.Router()

const { getLanguages, getLanguageById, createLanguage, deleteLanguage, updateLanguage } = require('../services/languages')


router.get('/', (req, res, next) => {
    const languages = getLanguages()
    res.send(languages)
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    const selectedLanguage = getLanguageById(id)

    res.send(selectedLanguage)
})

router.post('/', (req, res, next) => {
    const { body } = req
    const newLanguage = createLanguage(body)

    res.send(newLanguage)
})

router.put('/:id', (req, res, next) => {
    const { id } = req.params
    const { body } = req
    const editedLanguages = updateLanguage({...body, id})

    res.send(editedLanguages)
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    deleteLanguage(id)

    res.send({message: 'data was successfully removed', id})
})

module.exports = router