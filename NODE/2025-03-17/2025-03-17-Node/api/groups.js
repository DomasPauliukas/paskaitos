const express = require('express')

const router = express.Router()

const { getGroups, getGroupById, createGroup, updateGroup, deleteGroup } = require('../services/groups')

router.get('/',async (req, res, next) => {
    try {
        const data = await getGroups()
        res.send(data)
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.get('/:id',async (req, res, next) => {
    const { id } = req.params
    try {
        const group = await getGroupById(id)
        res.send(group)
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.post('/',async (req, res, next) => {
    const { body } = req
    try {
        const response = await createGroup(body)
        res.send({
            ...response,
            body // nebutina cia rasyti, body parodys backende nauja sukurta student
        })
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.put('/:id',async (req, res, next) => {
    const { id } = req.params
    const { body } = req
    try {
        const response = await updateGroup(body, id)

        res.send({ response, body: { ...body, id }})
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.delete('/:id',async (req, res, next) => {
    const { id } = req.params
    try {
        const response = await deleteGroup(id)
        res.send({ message: 'Data was successfully removed', id, response })
    } catch (error) {
        res.status(500).send({ error })
    }
})

module.exports = router