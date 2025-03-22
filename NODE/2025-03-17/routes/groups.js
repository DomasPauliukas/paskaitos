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


router.get('/groups', (req, res, next) => {
    const groups = getDataDB('groups')
    const data = {
        groups
    }
    res.render(`groups`, data)
})

router.get('/groups/:id', (req, res, next) => {
    const groups = getDataDB('groups')
    const { id } = req.params
    const selectedGroup = groups.find(group => group.id === id)
    const data = {
        selectedGroup
    }
    res.render(`group`, data)
})

router.get('/create-group', (req, res, next) => {
    res.render(`group-create`)
})

router.post('/group-created', (req, res, next) => {
    const newGroup = {...req.body, id: uuid()}
    updatedDataDB('groups', newGroup)
    res.redirect(`/groups`)
})

router.get('/edit-group/:id', (req, res, next) => {
    const groups = getDataDB('groups')
    const { id } = req.params
    const editedGroup = groups.find(group => group.id === id)
    const data = {
        editedGroup
    }

    res.render(`group-edit`, data)
})

router.post('/group-edited', (req, res, next) => {
    const groups = getDataDB('groups')
    const { id } = req.body
    const editedGroup = groups.map(group => {
        if( group.id === id) {
            return req.body
        } else {
            return group
        }
    })
    editDataDB('groups', editedGroup)
    res.redirect(`/groups/${id}`)

})

router.post('/delete-group', (req, res, next) => {
    const groups = getDataDB('groups')
    const { id } = req.body
    const deletedGroup = groups.filter(group => group.id !== id)
    editDataDB('groups', deletedGroup)

    res.redirect('/groups')
})

module.exports = router
