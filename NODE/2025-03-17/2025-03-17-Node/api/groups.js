const express = require('express')

const router = express.Router()
const { v4: uuid } = require('uuid')

const { getDataDB, updatedDataDB, editDataDB } = require('../services/FetchingData')


router.get('/', (req, res, next) => {
    const groups = getDataDB('groups')
    res.send(groups)
})

router.get('/:id', (req, res, next) => {
    const groups = getDataDB('groups')
    const { id } = req.params
    const selectedGroup = groups.find(group => group.id === id)

    res.send(selectedGroup)
})

router.post('/', (req, res, next) => {
    const newGroup = {...req.body, id: uuid(), number: Number(req.body.number)}
    updatedDataDB('groups', newGroup)

    res.send(newGroup)
})

router.put('/:id', (req, res, next) => {
    const groups = getDataDB('groups')
    const { id } = req.params
    const editedGroup = groups.map(group => {
        if( group.id === id) {
            const editedGr = {
                ...req.body,
                number: Number(req.body.number)
            }
            return editedGr
        } else {
            return group
        }
    })
    editDataDB('groups', editedGroup)

    res.send(editedGroup)
})

router.delete('/:id', (req, res, next) => {
    const groups = getDataDB('groups')
    const { id } = req.params
    const deletedGroup = groups.filter(group => group.id !== id)
    editDataDB('groups', deletedGroup)

    res.send(deletedGroup)
})

module.exports = router