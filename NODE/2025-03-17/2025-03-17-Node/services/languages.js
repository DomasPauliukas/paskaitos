const path = require('path')
const fs = require('fs')

const { v4: uuid } = require('uuid')

// GET
function getLanguages() {
    const filePath = path.join('db', 'languages.json')

    if (!fs.existsSync(filePath)) {
        throw new Error('File does not exist')
    }

    const fileContent = fs.readFileSync(filePath)

    const data = JSON.parse(fileContent)

    return data
}

// GET
function getLanguageById(id) {
    const filePath = path.join('db', 'languages.json')

    if (!fs.existsSync(filePath)) {
        throw new Error('File does not exist')
    }

    const fileContent = fs.readFileSync(filePath)

    const languages = JSON.parse(fileContent)

    const foundLanguage = languages.find(language => language.id === id)

    return foundLanguage
}

// POST
function createLanguage(body) {
    const id = uuid()

    const newLanguage = { 
        ...body,
        id 
    }

    const languages = getLanguages()

    languages.push(newLanguage)
    
    const stringifiedData = JSON.stringify(languages, null, 2)
    
    const filePath = path.join('db', 'languages.json')
    fs.writeFileSync(filePath, stringifiedData)

    return newLanguage
}

// UPDATE
function updateLanguage(data) {
    const { id } = data

    const languages = getLanguages()

    const editedLanguages = languages.map(language => {
        if (language.id === id) {
            return data
        } else {
            return language
        }
    })

    const stringifiedData = JSON.stringify(editedLanguages, null, 2)
    
    const filePath = path.join('db', 'languages.json')
    fs.writeFileSync(filePath, stringifiedData)

    return data
}

// DELETE
function deleteLanguage(id) {
    const languages = getLanguages()
    const updatedLanguages = languages.filter(language => language.id !== id)
    
    const stringifiedData = JSON.stringify(updatedLanguages, null, 2)
    const filePath = path.join('db', 'languages.json')
    fs.writeFileSync(filePath, stringifiedData)
}

module.exports = {
    getLanguages,
    getLanguageById,
    createLanguage,
    updateLanguage,
    deleteLanguage
}