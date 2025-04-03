const Language = require('../models/languageModel')


async function getLanguages(req, res) {
    try {
        const languages = await Language.find()
        res.send(languages)
    } catch (error) {
        res.status(500).send(error)
    }
}

async function getLanguageById(req, res) {
    try {
        const { id } = req.params
        const language = await Language.findById(id)

        if (!language) {
            return res.status(404).send({error: 'Language is not found'})
        }

        res.send(language)

    } catch (error) {
        res.status(500).send(error)
    }
}

async function createLanguage(req, res) {
    try {
        const language = new Language(req.body)
        await language.save()

        res.send(language)

    } catch (error) {
        res.status(500).send(error)
    }
}

async function updateLanguage(req, res) {
    try {
        const { id } = req.params
        const updatedLanguage = await Language.findByIdAndUpdate(
            id,
            req.body,
            {new: true}
        )

        if (!updatedLanguage) {
            return res.status(404).send({error: 'Language is not found'})
        }

        res.send(updatedLanguage)

    } catch (error) {
        res.status(500).send(error)
    }
}

async function deleteLanguage(req, res) {
    try {
        const { id } = req.params
        const deletedLanguage = await Language.findByIdAndDelete(id)

        if (!deletedLanguage) {
            return res.status(404).send({error: 'Language is not found'})
        }

        res.send(deletedLanguage)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getLanguages,
    getLanguageById,
    createLanguage,
    updateLanguage,
    deleteLanguage
}