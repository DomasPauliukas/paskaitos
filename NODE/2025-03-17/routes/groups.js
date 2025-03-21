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
    const groupsList = groups.map(group => `<li><a href="/groups/${group.id}">Number: ${group.number}</a></li>`).join('')
    res.send(`
        <a href="/">Go back to home page</a>
        <a href="/create-group">Create group</a>
        <h1>Groups:</h1>
        <ul>${groupsList}</ul>
        `)
})

router.get('/groups/:id', (req, res, next) => {
    const groups = getDataDB('groups')
    const { id } = req.params
    const selectedGroup = groups.find(group => group.id === id)
    const { name, number } = selectedGroup
    res.send(`
        <a href="/">Go back to home page</a>
        <h1>Group: ${name} (number: ${number})</h1>
        <a href="/edit-group/${id}">Edit group</a>
        <form action="/delete-group" method="POST">
            <input type="hidden" name="id" value="${id}"/>
            <button type="submit">Delete group</button>
        </form>
        `)
})

router.get('/create-group', (req, res, next) => {
    res.send(`
        <h1>Create group:</h1>
        <form action="/group-created" method="POST">
          <div>
            <label for="name">Group name:</label>
            <input type="text" name="name" id="name"/>
          </div>
          <div>
            <label for="number">Group number:</label>
            <input type="number" name="number" id="number"/>
          </div>
          

            <button type="submit">Create</button>
        </form>
        `)
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
    const { name, number } = editedGroup

    res.send(`
        <h1>Edit group:</h1>

        <form action="/group-edited" method="POST">
          <div>
            <label for="name">Group name:</label>
            <input type="text" name="name" id="name" value="${name}"/>
          </div>
          <div>
            <label for="number">Group number:</label>
            <input type="number" name="number" id="number" value="${number}"/>
          </div>

            <input type="hidden" name="id" value="${id}"/>
            <button type="submit">Edit</button>
        </form>
        `)
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
