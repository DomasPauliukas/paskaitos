const express = require('express')
const { getSubjects, getSubjectById, createSubject, updateSubject, deleteSubject } = require('../controllers/subjectController')
const router = express.Router()

router.get('/', getSubjects)
router.get('/:id', getSubjectById)
router.post('/', createSubject)
router.put('/:id', updateSubject)
router.delete('/:id', deleteSubject)

module.exports = router




















// const express = require('express')

// const router = express.Router()

// const { getSubjects, getSubjectById, createSubject, updateSubject, deleteSubject } = require('../services/subjects')


// router.get('/',async (req, res, next) => {
//     try {
//         const data = await getSubjects()
//         res.send(data)
//     } catch (error) {
//         res.status(500).send({ error })
//     }
// })

// router.get('/:id',async (req, res, next) => {
//     const { id } = req.params
//     try {
//         const subject = await getSubjectById(id)
//         res.send(subject)
//     } catch (error) {
//         res.status(500).send({ error })
//     }
// })

// router.post('/',async (req, res, next) => {
//     const { body } = req
//     try {
//         const response = await createSubject(body)
//         res.send({
//             ...response,
//             body // nebutina cia rasyti, body parodys backende nauja sukurta student
//         })
//     } catch (error) {
//         res.status(500).send({ error })
//     }
// })

// router.put('/:id',async (req, res, next) => {
//     const { id } = req.params
//     const { body } = req
//     try {
//         const response = await updateSubject(body, id)

//         res.send({ response, body: { ...body, id }})
//     } catch (error) {
//         res.status(500).send({ error })
//     }
// })

// router.delete('/:id',async (req, res, next) => {
//     const { id } = req.params
//     try {
//         const response = await deleteSubject(id)
//         res.send({ message: 'Data was successfully removed', id, response })
//     } catch (error) {
//         res.status(500).send({ error })
//     }
// })

// module.exports = router