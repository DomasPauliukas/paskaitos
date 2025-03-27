const express = require('express')

const router = express.Router()

const { getLanguages, getLanguageById, createLanguage, updateLanguage, deleteLanguage } = require('../services/languages')

router.get('/languages',async (req, res, next) => {
    const languages = await getLanguages()
    const data = {
        languages
    }
    res.render(`languages`, data)
})

router.get('/languages/:id',async (req, res, next) => {
    const { id } = req.params
    const selectedLanguage = await getLanguageById(id)
    const data = {
        selectedLanguage
    }
    res.render(`language`, data)
})

router.get('/create-language', (req, res, next) => {

    res.render(`language-create`)
})

router.post('/language-created',async (req, res, next) => {
    const { body } = req
    const newLanguage = await createLanguage(body)

    res.redirect(`/languages/${newLanguage.id}`)
})

router.get('/edit-language/:id',async (req, res, next) => {
    const { id } = req.params
    const editedLanguage = await getLanguageById(id)
    const data = {
        editedLanguage
    }
    res.render(`language-edit`, data)
})

router.post('/language-edited',async (req, res, next) => {
    const { body } = req
    const updatedLanguage = await updateLanguage(body)

    res.redirect(`/languages/${updatedLanguage.id}`)
})

router.post('/delete-language',async (req, res, next) => {
    const { id } = req.body
    await deleteLanguage(id)
    res.redirect('/languages')
})

module.exports = router