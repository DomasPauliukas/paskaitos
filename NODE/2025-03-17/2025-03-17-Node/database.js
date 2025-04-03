const mongoose = require('mongoose');
const process = require('process')

mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('MongoDB connected!')
    })
    .catch((error) => {
        console.log('failed to connect to MongoDB:', error)
    })


// paspaudus ctrl+c, kad issjungtu ir cia. 
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('MongoDB disconnected')
        process.exit(0)
    })
})

// M - model - taip kaip turi atrodyti modelis, panasiai kaip TypeScript .
// V - view - FE dalis 
// C - controller - kaip ir buve services, funkcijos visos .




















// MONGODB before Mongoose

// const { MongoClient } = require('mongodb') //npm i mongodb
// const process = require('process')

// const client = new MongoClient(process.env.DB_URI)

// let db

// async function connectToDB() {
//     try {
//         await client.connect()
//         db = client.db(process.env.DB_NAME)
//         console.log('Connected to MongoDB')
//     } catch (error) {
//         console.error('Error connecting to MongoDB: ', error)
//         process.exit(1)
//     }
// }

// function getDB() {
//     if (!db) {
//         throw new Error('Database is not initialized')
//     }

//     return db
// }

// module.exports = { connectToDB, getDB }