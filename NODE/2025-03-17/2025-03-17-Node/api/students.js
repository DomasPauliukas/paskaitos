const express = require('express')

const router = express.Router()

const { getStudents, getStudentById, createStudent, updateStudent, deleteStudent, getStudentByName, getStudentBy } = require('../services/students')


router.get('/', async (req, res, next) => {
    try {
        const data = await getStudents()
        res.send(data)
    } catch (error) {
        res.status(500).send({ error })
    }

})

router.get('/:id',async (req, res, next) => {
    const { id } = req.params

    try {
        const student = await getStudentById(id)
        res.send(student)
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.post('/', async (req, res, next) => {
    const { body } = req
    try {
        const response = await createStudent(body)
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
        const response = await updateStudent(body, id)

        res.send({ response, body: { ...body, id }})
    } catch (error) {
        res.status(500).send({ error })
    }
})

router.delete('/:id',async (req, res, next) => {
    const { id } = req.params

    try {
        const response = await deleteStudent(id)
        res.send({ message: 'Data was successfully removed', id, response })
    } catch (error) {
        res.status(500).send({ error })
    }
})

// kuriame savo routes pagal url params.

router.get('/name/:name', async (req, res, next) => {
    const { name } = req.params
    try {
        const data = await getStudentByName(name)
        res.send(data)
    } catch (error) {
        res.status(500).send({ error })
    }

})

router.get('/:key/:value', async (req, res, next) => {
    const { key, value } = req.params
    try {
        const data = await getStudentBy(key, value)
        res.send(data)
    } catch (error) {
        res.status(500).send({ error })
    }

})


module.exports = router