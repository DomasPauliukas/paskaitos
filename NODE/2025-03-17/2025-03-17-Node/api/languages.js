const express = require('express')

const router = express.Router()

const { getLanguages, getLanguageById, createLanguage, deleteLanguage, updateLanguage } = require('../services/languages')


router.get('/',async (req, res, next) => {
    try {
        const data = await getLanguages()
        res.send(data)
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.get('/:id',async (req, res, next) => {
    const { id } = req.params
    try {
        const language = await getLanguageById(id)
        res.send(language)
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.post('/',async (req, res, next) => {
    const { body } = req
    try {
        const response = await createLanguage(body)
        res.send({
            ...response,
            body // nebutina cia rasyti, body parodys backende nauja sukurta student
        })
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.put('/:id',async (req, res, next) => {
    const { id } = req.params
    const { body } = req
    try {
        const response = await updateLanguage(body, id)

        res.send({ response, body: { ...body, id }})
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.delete('/:id',async (req, res, next) => {
    const { id } = req.params
    try {
        const response = await deleteLanguage(id)
        res.send({ message: 'Data was successfully removed', id, response })
    } catch (error) {
        res.status(500).send({ error })
    }
})

module.exports = router