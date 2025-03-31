const { ObjectId } = require('mongodb')
const { getDB } = require('../database')

// GET
async function getStudents() {
    const db = getDB()
    const data = await db
                        .collection('students')
                        .aggregate([
                            {
                                $lookup: {
                                    from: 'groups',
                                    localField: 'groupId', // is students
                                    foreignField: '_id', // is groups
                                    as: 'group' // 'key' pavadinima nustatom.
                                }
                            },
                            {
                                 $unwind: '$group' // kad atvaizduotu ne kaip masyva, o objekta.
                            }
                        ])
                        .toArray()
    return data
    // .find({name: 'Domas'}) .find({age: {$lte: 20}}) - less than or equal. gte - >=
    // .sort({age: 1 / -1}) - sortina didejimo/mazejimo tvarka pagal age
    // .limit(2)

// Aggregation() -->
        // const data = await db
        //     .collection('students')
        //     .aggregate([
        //         {$match: {age: { $gte: 25 }}},
        //         {$sort: {age: 1} },
        //         {$limit: 2}
        //     ])
        //     .toArray()
        // return data

    //galima nerasyti const data = o is karto return await ....
}

// GET
async function getStudentById(id) {
    const db = getDB()
    const student = await db
                        .collection('students')
                        // .findOne({ _id: ObjectId.createFromHexString(id) })
                        .aggregate([
                            {
                                $match: {
                                    _id: ObjectId.createFromHexString(id)
                                }
                            },
                            { //galima kelis $lookup, kiek reikia, tiek prisegti
                                $lookup: {
                                    from: 'groups',
                                    localField: 'groupId',
                                    foreignField: '_id',
                                    as: 'group'
                                }
                            },
                            {
                                $unwind: '$group'
                            }
                        ])
                        .next()  // kad sustotu surades ta viena ID. kitaip nesustoja.
    return student
}

// POST
async function createStudent(body) {
    const db = getDB()

    const response = await db
                            .collection('students')
                            .insertOne({...body, groupId: ObjectId.createFromHexString(body.groupId)})
    return response
}

// UPDATE
async function updateStudent(data, id) {
    const db = getDB()

    if (data.groupId && ObjectId.isValid(data.groupId)) {
        data.groupId = ObjectId.createFromHexString(data.groupId)
    }

    const response = await db
                            .collection('students')
                            .updateOne(
                                { _id: ObjectId.createFromHexString(id) },
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




async function getStudentByName(name) {
    const db = getDB()

    const response = await db
                            .collection('students')
                            .find({name: name})
                            .toArray()

    return response
}

async function getStudentBy(key, value) {
    const db = getDB()

    const response = await db
                            .collection('students')
                            .find({ [key]: value})
                            .toArray()

    return response
}
// [key] -  su lauztiniais skliaustais, paima key reiksme, kaip kintamaji. nes jei butu tiesiog find ({ key: value}) - tai butu kaip zodis key. o dabar key bus toks koki irasysime, city/name/surnamge ir t.t.

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    getStudentByName,
    getStudentBy
}