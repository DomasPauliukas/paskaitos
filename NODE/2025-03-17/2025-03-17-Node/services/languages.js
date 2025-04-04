// const { ObjectId } = require('mongodb')
// const { getDB } = require('../database')

// // GET
// async function getLanguages() {
//     const db = getDB()
//     const data = await db
//                         .collection('languages')
//                         .find()
//                         .toArray()
//     return data
// }

// // GET
// async function getLanguageById(id) {
//     const db = getDB()
//     const student = await db
//                         .collection('languages')
//                         .findOne({ _id: ObjectId.createFromHexString(id) })
//     return student
// }

// // POST
// async function createLanguage(body) {
//     const db = getDB()
//     const response = await db
//                             .collection('languages')
//                             .insertOne(body)
//     return response
// }

// // UPDATE
// async function updateLanguage(data, id) {
//     const db = getDB()
//     const response = await db
//                             .collection('languages')
//                             .updateOne(
//                                 { _id: ObjectId.createFromHexString(id) },
//                                 { $set: data }
//                             )
// //. updateOne({},{}) du obj paduodami, pirmas - redaguojamas objektas, antras - i ka norime pakeisti. (data - tai body yra)
//     return response
// }

// // DELETE
// async function deleteLanguage(id) {
//     const db = getDB()
//     const response = await db
//                             .collection('languages')
//                             .deleteOne({ _id: ObjectId.createFromHexString(id) })
//     return response
// }

// module.exports = {
//     getLanguages,
//     getLanguageById,
//     createLanguage,
//     updateLanguage,
//     deleteLanguage
// }