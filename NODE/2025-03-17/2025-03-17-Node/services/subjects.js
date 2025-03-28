const { ObjectId } = require('mongodb')
const { getDB } = require('../database')

// GET
async function getSubjects() {
    const db = getDB()
    const data = await db
                        .collection('subjects')
                        .find()
                        .toArray()
    return data
}

// GET
async function getSubjectById(id) {
    const db = getDB()
    const student = await db
                        .collection('subjects')
                        .findOne({ _id: ObjectId.createFromHexString(id) })
    return student
}

// POST
async function createSubject(body) {
    const db = getDB()
    const response = await db
                            .collection('subjects')
                            .insertOne(body)
    return response
}

// UPDATE
async function updateSubject(data, id) {
    const db = getDB()
    const response = await db
                            .collection('subjects')
                            .updateOne(
                                { _id: ObjectId.createFromHexString(id) },
                                { $set: data }
                            )
//. updateOne({},{}) du obj paduodami, pirmas - redaguojamas objektas, antras - i ka norime pakeisti. (data - tai body yra)
    return response
}

// DELETE
async function deleteSubject(id) {
    const db = getDB()
    const response = await db
                            .collection('subjects')
                            .deleteOne({ _id: ObjectId.createFromHexString(id) })
    return response
}

module.exports = {
    getSubjects,
    getSubjectById,
    createSubject,
    updateSubject,
    deleteSubject
}