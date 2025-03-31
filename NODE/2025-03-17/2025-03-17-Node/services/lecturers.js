const { ObjectId } = require('mongodb')
const { getDB } = require('../database')

// GET
async function getLecturers() {
    const db = getDB()
    const data = await db
                        .collection('lecturers')
                        .aggregate([
                            {
                                $lookup: {
                                    from: 'subjects',
                                    localField: 'subjects',
                                    foreignField: '_id',
                                    as: 'allSubjects'
                                }
                            },
                            {
                                $lookup: {
                                    from: 'groups',
                                    localField: 'groups',
                                    foreignField: '_id',
                                    as: 'allGroups'
                                }
                            }
                        ])
                        .toArray()
    return data
}

// GET
async function getLecturerById(id) {
    const db = getDB()
    const lecturer = await db
                        .collection('lecturers')
                        .aggregate([
                            {
                                $match: {
                                    _id: ObjectId.createFromHexString(id)
                                }
                                // $match: { subjects: { $exists: true, $not: {$size: 0} }} paims tuos, kurie turi subject key, ir kuriu length > 0.
                            },
                            {
                                $lookup: {
                                    from: 'subjects',
                                    localField: 'subjects',
                                    foreignField: '_id',
                                    as: 'allSubjects'
                                }
                            },
                            {
                                $lookup: {
                                    from: 'groups',
                                    localField: 'groups',
                                    foreignField: '_id',
                                    as: 'allGroups'
                                }
                            }
                        ])
                        .next()
                        // .findOne({ _id: ObjectId.createFromHexString(id) })
    return lecturer
}

// POST
async function createLecturer(body) {
    const db = getDB()
    const response = await db
                            .collection('lecturers')
                            .insertOne({
                                ...body, 
                                subjects: body.subjects.map(subject => ObjectId.createFromHexString(subject)),
                                groups: body.groups.map(group => ObjectId.createFromHexString(group))
                            })
    return response
}

// UPDATE
async function updateLecturer(data, id) {
    const db = getDB()

    if (data.subjects && Array.isArray(data.subjects)) {
        data.subjects = data.subjects.map(subject => ObjectId.createFromHexString(subject));
    }

    if (data.groups && Array.isArray(data.groups)) {
        data.groups = data.groups.map(group => ObjectId.createFromHexString(group));
    }

    const response = await db
                            .collection('lecturers')
                            .updateOne(
                                { _id: ObjectId.createFromHexString(id) },
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