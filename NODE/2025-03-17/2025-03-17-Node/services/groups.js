const path = require('path')
const fs = require('fs')

const { v4: uuid } = require('uuid')

// GET
function getGroups() {
    const filePath = path.join('db', 'groups.json')

    if (!fs.existsSync(filePath)) {
        throw new Error('File does not exist')
    }

    const fileContent = fs.readFileSync(filePath)

    const data = JSON.parse(fileContent)

    return data
}

// GET
function getGroupById(id) {
    const filePath = path.join('db', 'groups.json')

    if (!fs.existsSync(filePath)) {
        throw new Error('File does not exist')
    }

    const fileContent = fs.readFileSync(filePath)

    const groups = JSON.parse(fileContent)

    const foundGroup = groups.find(group => group.id === id)

    return foundGroup
}

// POST
function createGroup(body) {
    const id = uuid()

    const newGroup = { 
        ...body,
        number: Number(body.number),
        id 
    }

    const groups = getGroups()

    groups.push(newGroup)
    
    const stringifiedData = JSON.stringify(groups, null, 2)
    
    const filePath = path.join('db', 'groups.json')
    fs.writeFileSync(filePath, stringifiedData)

    return newGroup
}

// UPDATE
function updateGroup(data) {
    const { id } = data

    const groups = getGroups()

    const editedGroup = groups.map(group => {
        if( group.id === id) {
            const editedGr = {
                ...data,
                number: Number(data.number)
            }
            return editedGr
        } else {
            return group
        }
    })

    const stringifiedData = JSON.stringify(editedGroup, null, 2)
    
    const filePath = path.join('db', 'groups.json')
    fs.writeFileSync(filePath, stringifiedData)

    return data
}

// DELETE
function deleteGroup(id) {
    const groups = getGroups()
    const updatedGroups = groups.filter(group => group.id !== id)
    
    const stringifiedData = JSON.stringify(updatedGroups, null, 2)
    const filePath = path.join('db', 'groups.json')
    fs.writeFileSync(filePath, stringifiedData)
}

module.exports = {
    getGroups,
    getGroupById,
    createGroup,
    updateGroup,
    deleteGroup
}