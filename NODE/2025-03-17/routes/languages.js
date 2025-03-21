const express = require('express')

const router = express.Router()

const { v4: uuid } = require('uuid')

const path = require('path')
const fs = require('fs')


function updatedDataDB (endpoint, item) {
    const filePath = path.join('db', endpoint + '.json')
    const data = getDataDB(endpoint)
    
    data.push(item)
    
    const stringifiedData = JSON.stringify(data, null, 2)
    
    fs.writeFileSync(filePath, stringifiedData)
}

function editDataDB (endpoint, editedData) {
    const filePath = path.join('db', endpoint + '.json')

    const stringifiedData = JSON.stringify(editedData, null, 2)
    
    fs.writeFileSync(filePath, stringifiedData)
}

function getDataDB (endpoint) {
    const filePath = path.join('db', endpoint + '.json')
//patikriname ar yra toks endpoint
if (!fs.existsSync(filePath)) {
    throw new Error('File does not exist')
}

    const fileContent = fs.readFileSync(filePath)
    const data = JSON.parse(fileContent)

    return data
}


router.get('/languages', (req, res, next) => {
    const languages = getDataDB('languages')
    const languagesList = languages.map(language => `<li><a href="/languages/${language.id}">${language.name}</a></li>`).join('')

    res.send(`
        <a href="/">Go back to home page</a>
        <a href="/create-language">Create language</a>
        <h1>Languages list:</h1>
        <ul>${languagesList}</ul>
        `)
})

router.get('/languages/:id', (req, res, next) => {
    const languages = getDataDB('languages')
    const { id } = req.params
    const selectedLanguage = languages.find(language => language.id === id)
    res.send(`
        <h1>${selectedLanguage.name}</h1>
        <a href="/edit-language/${id}">Edit language</a>

        <form action="/delete-language" method="POST">
            <input type="hidden" name="id" value="${id}"/>
            <button type="submit">Delete language</button>
        </form>
        <a href="/">Go back to home page</a>

        `)
})

router.get('/create-language', (req, res, next) => {

    res.send(`
        <h1>Create language:</h1>
        <form action="/language-created" method="POST">
            <div>
                <label for="language">Add new Language:</label>
                <input type="text" name="name" id="language"/>

                <button type="submit">Add</button>
            </div>
        </form>
        `)
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

    res.send(`
        <h1>Edit language</h1>
        <form action="/language-edited" method="POST">
            <div>
                <label for="language">Edit language:</label>
                <input type="text" name="name" id="language" value="${editedLanguage.name}"/>

                <input type="hidden" name="id" value="${id}"/>
                <button type="submit">Edit</button>
            </div>
        </form>
        `)
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

router.post(`/delete-language`, (req, res, next) => {
    const languages = getDataDB('languages')
    const { id } = req.body
    const deletedLanguage = languages.filter(language => language.id !== id)
    editDataDB('languages', deletedLanguage)
    res.redirect('/languages')
})

module.exports = router