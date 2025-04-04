// const path = require('path')
// const fs = require('fs')

// function updatedDataDB (endpoint, item) {
//     const filePath = path.join('db', endpoint + '.json')
//     const data = getDataDB(endpoint)
    
//     data.push(item)
    
//     const stringifiedData = JSON.stringify(data, null, 2)
    
//     fs.writeFileSync(filePath, stringifiedData)
// }

// function editDataDB (endpoint, editedData) {
//     const filePath = path.join('db', endpoint + '.json')

//     const stringifiedData = JSON.stringify(editedData, null, 2)
    
//     fs.writeFileSync(filePath, stringifiedData)
// }

// function getDataDB (endpoint) {
//     const filePath = path.join('db', endpoint + '.json')
// //patikriname ar yra toks endpoint
// if (!fs.existsSync(filePath)) {
//     throw new Error('File does not exist')
// }

//     const fileContent = fs.readFileSync(filePath)
//     const data = JSON.parse(fileContent)

//     return data
// }

// module.exports = {
//     updatedDataDB,
//     editDataDB,
//     getDataDB,
// }