const { ObjectId } = require('mongodb')
const { getDB } = require('../database')

// GET
async function getGroups() {
    const db = getDB()
    const data = await db
                        .collection('groups')
                        .find()
                        .toArray()
    return data
}

// GET
async function getGroupById(id) {
    const db = getDB()
    const group = await db
                        .collection('groups')
                        .findOne({ _id: ObjectId.createFromHexString(id) })
    return group
}

// POST
async function createGroup(body) {
    const db = getDB()
    const response = await db
                            .collection('groups')
                            .insertOne(body)
    return response
}

// UPDATE
async function updateGroup(data, id) {
    const db = getDB()
    const response = await db
                            .collection('groups')
                            .updateOne(
                                { _id: ObjectId.createFromHexString(id) },
                                { $set: data }
                            )
//. updateOne({},{}) du obj paduodami, pirmas - redaguojamas objektas, antras - i ka norime pakeisti. (data - tai body yra)
    return response
}

// DELETE
async function deleteGroup(id) {
    const db = getDB()
    const response = await db
                            .collection('groups')
                            .deleteOne({ _id: ObjectId.createFromHexString(id) })
    return response
}

module.exports = {
    getGroups,
    getGroupById,
    createGroup,
    updateGroup,
    deleteGroup
}