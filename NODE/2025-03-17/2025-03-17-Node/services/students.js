const path = require('path')
const fs = require('fs')

const { v4: uuid } = require('uuid')

// GET
function getStudents() {
    const filePath = path.join('db', 'students.json')

    if (!fs.existsSync(filePath)) {
        throw new Error('File does not exist')
    }

    const fileContent = fs.readFileSync(filePath)

    const data = JSON.parse(fileContent)

    return data
}

// GET
function getStudentById(id) {
    const filePath = path.join('db', 'students.json')

    if (!fs.existsSync(filePath)) {
        throw new Error('File does not exist')
    }

    const fileContent = fs.readFileSync(filePath)

    const students = JSON.parse(fileContent)

    const foundStudent = students.find(student => student.id === id)

    return foundStudent
}

// POST
function createStudent(body) {
    const id = uuid()
    const interests = []
    const languages = []

    if (body.interests) {
        if (typeof body.interests === 'string') {
            interests.push(body.interests)
        } else {
            interests.push(...body.interests)
        }
    }
    if (body.languages) {
        if (typeof body.languages === 'string') {
          languages.push(body.languages)
        } else {
          languages.push(...body.languages)
        }
      }

    const newStudent = { 
        ...body,
        interests,
        languages,
        id 
    }

    const students = getStudents()

    students.push(newStudent)
    
    const stringifiedData = JSON.stringify(students, null, 2)
    
    const filePath = path.join('db', 'students.json')
    fs.writeFileSync(filePath, stringifiedData)

    return newStudent
}

// UPDATE
function updateStudent(data) {
    const { id } = data

    const students = getStudents()

    const updatedStudents = students.map(student => {
        if (student.id === id) {
            const interests = []
            const languages = []

            if (data.interests) {
                if (typeof data.interests === 'string') {
                    interests.push(data.interests)
                } else {
                    interests.push(...data.interests)
                }
            }
            if (data.languages) {
                if (typeof data.languages === 'string') {
                  languages.push(data.languages)
                } else {
                  languages.push(...data.languages)
                }
            }
        
            const updatedStudent = { 
                ...data,
                age: Number(data.age),
                interests,
                languages
            }

            return updatedStudent
        } else {
            return student
        }
         
    })

    const stringifiedData = JSON.stringify(updatedStudents, null, 2)
    
    const filePath = path.join('db', 'students.json')
    fs.writeFileSync(filePath, stringifiedData)

    return data
}

// DELETE
function deleteStudent(id) {
    const students = getStudents()
    const updatedStudents = students.filter(student => student.id !== id)
    
    const stringifiedData = JSON.stringify(updatedStudents, null, 2)
    const filePath = path.join('db', 'students.json')
    fs.writeFileSync(filePath, stringifiedData)
}

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}