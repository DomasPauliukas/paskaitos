const { ObjectId } = require('mongodb')
const { getDB } = require('../database')

// GET
async function getStudents() {
    const db = getDB()
    const data = await db
                        .collection('students')
                        .find()
                        .toArray()
    return data
    //galima nerasyti const data = o is karto return await ....
}

// GET
async function getStudentById(id) {
    const db = getDB()
    const student = await db
                        .collection('students')
                        .findOne({ _id: ObjectId.createFromHexString(id) })
    return student
}

// POST
async function createStudent(body) {
    const db = getDB()
    const response = await db
                            .collection('students')
                            .insertOne(body)
    return response
}

// UPDATE
async function updateStudent(data) {
    const db = getDB()
    const response = await db
                            .collection('students')
                            .updateOne(
                                { _id: ObjectId.createFromHexString(data.id) },
                                { $set: data }
                            )
//. updateOne({},{}) du obj paduodami, pirmas - redaguojamas objektas, antras - i ka norime pakeisti. (data - tai body yra)
    return response

}

// DELETE
async function deleteStudent(id) {
    const db = getDB()
    const response = await db
                            .collection('students')
                            .deleteOne({ _id: ObjectId.createFromHexString(id) })
    return response
}

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}