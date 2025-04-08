const Student = require('../models/studentModel')



// Read (GET - ALL)
// const getStudents = async (req, res) => {
//     arrow funkcija
// }

// const students = await Student.find().populate({
//     path: 'groupId',
//     select: 'name',
//     populate: --- GALIMA I POPULATE DETI {} JEI SUDETINGESNIS, CIA JEI GROUPID TURI RELATIONSHIP, TAI GALIMA DAR PRIDETI IR JAM.
// })

async function getStudents(req, res) {
    console.log(req.user)  // is cia gauname visa decodinta info is middleware. atsinesem, reiskia viskas jau patikrinta, kad yra token ir pan. paskui galima toliau naudoti is req.user informacija. nes cia jau restrictintas route.
    try {
        const students = await Student.find().populate('groupId', 'name number') // antrame parametre rasome, ka prideti, per tarpeli, ID pridedamas savaime.
        res.send(students)
    } catch (error) {
        res.status(500).send(error)
    }
}

// Read (GET - SINGLE)
// 404 error kai userio klaida, 500 kai serverio klaida
async function getStudentById(req, res) {
    try {
        const { id } = req.params
        const student = await Student.findById(id)

        if (!student) {
            return res.status(404).send({error: 'User not found'})
        }

        res.send(student)
    } catch (error) {
        res.status(500).send(error)
    }
}

// Create (POST)
async function createStudent(req, res) {
    try {
        const student = new Student(req.body)
        await student.save()

        res.send(student)
    } catch (error) {
        res.status(500).send(error)
    }
}

// Update (PUT/PATCH)
async function updateStudent(req, res) {
    try {
        const { id } = req.params

        const updatedStudent = await Student.findByIdAndUpdate(
            id, // id
            req.body, // i ka pakeisti
            { new: true } // kad grazintu atnaujinta.
        )

        if (!updatedStudent) {
            return res.status(404).send({error: 'User not found'})
        }

        res.send(updatedStudent)
    } catch (error) {
        res.status(500).send(error)
    }
}

// Delete (DELETE)
async function deleteStudent(req, res) {
    try {
        const { id } = req.params
        const deletedStudent = await Student.findByIdAndDelete(id)

        if (!deletedStudent) {
            return res.status(404).send({error: 'User not found'})
        }
        res.send(deletedStudent)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}