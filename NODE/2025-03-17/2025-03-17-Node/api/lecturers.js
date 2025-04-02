const express = require('express')

const router = express.Router()
const { getLecturers, getLecturerById, createLecturer, updateLecturer, deleteLecturer, getLectorGroups, getLectorSubjects } = require('../services/lecturers')


router.get('/',async (req, res, next) => {
    try {
        const data = await getLecturers()
        res.send(data)
    } catch (error) {
        res.status(500).send({ error })
    }

})

router.get('/:id',async (req, res, next) => {
    const { id } = req.params
    try {
        const lecturer = await getLecturerById(id)
        res.send(lecturer)
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.post('/',async (req, res, next) => {
    const { body } = req
    try {
        const response = await createLecturer(body)
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
        const response = await updateLecturer(body, id)

        res.send({ response, body: { ...body, id }})
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.delete('/:id',async (req, res, next) => {
    const { id } = req.params
    try {
        const response = await deleteLecturer(id)
        res.send({ message: 'Data was successfully removed', id, response })
    } catch (error) {
        res.status(500).send({ error })
    }
})



router.get(`/:lector/groups`, async(req, res, next) => {
    const { lector } = req.params
    try {
        const data = await getLectorGroups(lector)
        res.send(data)
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.get('/:lector/subjects', async(req, res, next) => {
    const { lector } = req.params
    try {
        const data = await getLectorSubjects(lector)
        res.send(data)

    } catch (error) {
        res.status(500).send({ error })
    }
})

module.exports = router