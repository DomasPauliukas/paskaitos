const Subject = require('../models/subjectModel')

async function getSubjects(req, res) {
    try {
        const subjects = await Subject.find()
        res.send(subjects)
    } catch (error) {
        res.status(500).send(error)
    }
}

async function getSubjectById(req, res) {
    try {
        const { id } = req.params
        const subject = await Subject.findById(id)

    if (!subject) {
        return res.status(404).send({error: 'Subject is not found'})
    }
    res.send(subject)
    } catch (error) {
        res.status(500).send(error)
    }
}

async function createSubject(req, res) {
    try {
        const lecturer = new Subject(req.body)
        await lecturer.save()

        res.send(lecturer)

    } catch (error) {
        res.status(500).send(error)
    }
}

async function updateSubject(req, res) {
    try {
        const { id } = req.params
        const updatedSubject = await Subject.findByIdAndUpdate(
            id,
            req.body,
            {new: true}
        )

        if (!updatedSubject) {
            return res.status(404).send({error: 'Subject is not found'})
        }

        res.send(updatedSubject)

    } catch (error) {
        res.status(500).send(error)
    }
}

async function deleteSubject(req, res) {
    try {
        const { id } = req.params
        const deletedSubject = await Subject.findByIdAndDelete(id)

        if (!deletedSubject) {
            return res.status(404).send({error: 'Subject is not found'})
        }

        res.send(deletedSubject)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getSubjects,
    getSubjectById,
    createSubject,
    updateSubject,
    deleteSubject
}