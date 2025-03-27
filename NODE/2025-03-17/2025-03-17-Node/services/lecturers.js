const { ObjectId } = require('mongodb')
const { getDB } = require('../database')

// GET
async function getLecturers() {
    const db = getDB()
    const data = await db
                        .collection('lecturers')
                        .find()
                        .toArray()
    return data
}

// GET
async function getLecturerById(id) {
    const db = getDB()
    const lecturer = await db
                        .collection('lecturers')
                        .findOne({ _id: ObjectId.createFromHexString(id) })
    return lecturer
}

// POST
async function createLecturer(body) {
    const db = getDB()
    const response = await db
                            .collection('lecturers')
                            .insertOne(body)
    return response
}

// UPDATE
async function updateLecturer(data) {
    const db = getDB()
    const response = await db
                            .collection('lecturers')
                            .updateOne(
                                { _id: ObjectId.createFromHexString(data.id) },
                                { $set: data }
                            )
//. updateOne({},{}) du obj paduodami, pirmas - redaguojamas objektas, antras - i ka norime pakeisti. (data - tai body yra)
    return response
}

// DELETE
async function deleteLecturer(id) {
    const db = getDB()
    const response = await db
                            .collection('lecturers')
                            .deleteOne({ _id: ObjectId.createFromHexString(id) })
    return response
}

module.exports = {
    getLecturers,
    getLecturerById,
    createLecturer,
    updateLecturer,
    deleteLecturer
}