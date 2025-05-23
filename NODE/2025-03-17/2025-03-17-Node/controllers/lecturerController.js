const Lecturer = require('../models/lecturerModel')


async function getLecturers(req, res) {
    try {
        const lecturers = await Lecturer.find()
                                            .populate({
                                                path: 'groups',
                                                options: { sort: { number: 1 } }
                                            })
                                            .populate('subjects')
        res.send(lecturers)
    } catch (error) {
        res.status(500).send(error)
    }
}

async function getLecturerById(req, res) {
    try {
        const { id } = req.params
        const lecturer = await Lecturer.findById(id)

        if (!lecturer) {
            return res.status(404).send({error: 'Lecturer is not found'})
        }

        res.send(lecturer)

    } catch (error) {
        res.status(500).send(error)
    }
}

async function createLecturer(req, res) {
    try {
        const lecturer = new Lecturer(req.body)
        await lecturer.save()

        res.send(lecturer)

    } catch (error) {
        res.status(500).send(error)
    }
}

async function updateLecturer(req, res) {
    try {
        const { id } = req.params
        const updatedLecturer = await Lecturer.findByIdAndUpdate(
            id,
            req.body,
            { new: true}
        )

        if (!updatedLecturer) {
            return res.status(404).send({error: 'Lecturer is not found'})
        }

        res.send(updatedLecturer)
    } catch (error) {
        res.status(500).send(error)
    }
}

async function deleteLecturer(req, res) {
    try {
        const { id } = req.params
        const deletedLecturer = await Lecturer.findByIdAndDelete(id)

        if (!deletedLecturer) {
            return res.status(404).send({error: 'Lecturer is not found'})
        }

        res.send(deletedLecturer)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getLecturers,
    getLecturerById,
    createLecturer,
    updateLecturer,
    deleteLecturer
}