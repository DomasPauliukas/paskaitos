const express = require('express')

const router = express.Router()

const { getGroups, getGroupById, createGroup, updateGroup, deleteGroup } = require('../services/groups')

router.get('/groups',async (req, res, next) => {
    const groups = await getGroups()
    const data = {
        groups
    }
    res.render(`groups`, data)
})

router.get('/groups/:id',async (req, res, next) => {
    const { id } = req.params
    const selectedGroup = await getGroupById(id)
    const data = {
        selectedGroup
    }
    res.render(`group`, data)
})

router.get('/create-group', (req, res, next) => {
    res.render(`group-create`)
})

router.post('/group-created',async (req, res, next) => {
    const { body } = req
    const newGroup = await createGroup(body)
    res.redirect(`/groups/${newGroup.id}`)
})

router.get('/edit-group/:id',async (req, res, next) => {
    const { id } = req.params
    const editedGroup = await getGroupById(id)
    const data = {
        editedGroup
    }

    res.render(`group-edit`, data)
})

router.post('/group-edited',async (req, res, next) => {
    const { body } = req
    const editedGroup = await updateGroup(body)
    res.redirect(`/groups/${editedGroup.id}`)

})

router.post('/delete-group',async (req, res, next) => {
    const { id } = req.body
    await deleteGroup(id)

    res.redirect('/groups')
})

module.exports = router
