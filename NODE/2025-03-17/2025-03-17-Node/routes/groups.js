const express = require('express')

const router = express.Router()

const { getGroups, getGroupById, createGroup, updateGroup, deleteGroup } = require('../services/groups')

router.get('/groups', (req, res, next) => {
    const groups = getGroups()
    const data = {
        groups
    }
    res.render(`groups`, data)
})

router.get('/groups/:id', (req, res, next) => {
    const { id } = req.params
    const selectedGroup = getGroupById(id)
    const data = {
        selectedGroup
    }
    res.render(`group`, data)
})

router.get('/create-group', (req, res, next) => {
    res.render(`group-create`)
})

router.post('/group-created', (req, res, next) => {
    const { body } = req
    const newGroup = createGroup(body)
    res.redirect(`/groups/${newGroup.id}`)
})

router.get('/edit-group/:id', (req, res, next) => {
    const { id } = req.params
    const editedGroup = getGroupById(id)
    const data = {
        editedGroup
    }

    res.render(`group-edit`, data)
})

router.post('/group-edited', (req, res, next) => {
    const { body } = req
    const editedGroup = updateGroup(body)
    res.redirect(`/groups/${editedGroup.id}`)

})

router.post('/delete-group', (req, res, next) => {
    const { id } = req.body
    deleteGroup(id)

    res.redirect('/groups')
})

module.exports = router
