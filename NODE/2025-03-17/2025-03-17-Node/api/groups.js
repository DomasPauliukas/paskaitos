const express = require('express')

const router = express.Router()

const { getGroups, getGroupById, createGroup, updateGroup, deleteGroup } = require('../services/groups')

router.get('/', (req, res, next) => {
    const groups = getGroups()
    res.send(groups)
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    const selectedGroup = getGroupById(id)

    res.send(selectedGroup)
})

router.post('/', (req, res, next) => {
    const { body } = req
    const newGroup = createGroup(body)

    res.send(newGroup)
})

router.put('/:id', (req, res, next) => {
    const { id } = req.params
    const { body } = req
    const editedGroup = updateGroup({...body, id})

    res.send(editedGroup)
})

router.delete('/:id', (req, res, next) => {
    const { id } = req.params
    deleteGroup(id)

    res.send({message: 'data was successfully removed', id})
})

module.exports = router