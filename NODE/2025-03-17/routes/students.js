const express = require('express')

// const app - pagrindinis failas
// const router - routerio failiukas. visur pervadiname siame kode i router. router.get / router.post ir t.t.

const router = express.Router()
const { v4: uuid } = require('uuid')

const path = require('path')
const fs = require('fs')

// apacioje funkcija, kuri atnaujina data i json

// function getStudents() {
//     const filePath = path.join('db', 'students.json')
    
//     const fileContent = fs.readFileSync(filePath)
//     const data = JSON.parse(fileContent)
    
//     return data
// }

// function getStudentById (id) {
//     const students = getStudents()
    
//     return students.find(student => student.id === id)
    
// }

function updatedDataDB (endpoint, item) {
    const filePath = path.join('db', endpoint + '.json')
    const data = getDataDB(endpoint)
    
    data.push(item)
    
    const stringifiedData = JSON.stringify(data, null, 2)
    
    fs.writeFileSync(filePath, stringifiedData)
}

function editDataDB (endpoint, editedData) {
    const filePath = path.join('db', endpoint + '.json')

    const stringifiedData = JSON.stringify(editedData, null, 2)
    
    fs.writeFileSync(filePath, stringifiedData)
}

function getDataDB (endpoint) {
    const filePath = path.join('db', endpoint + '.json')
//patikriname ar yra toks endpoint
if (!fs.existsSync(filePath)) {
    throw new Error('File does not exist')
}

    const fileContent = fs.readFileSync(filePath)
    const data = JSON.parse(fileContent)

    return data
}

router.get('/students', (req, res, next) => {

    const students = getDataDB('students')

    const studentList = students.map(student => `<li><a href="/students/${student.id}">${student.name} ${student.surname}</a></li>`).join('')

    res.send(`
        <a href="/">Go back to home page</a>
        <h1>Student's List</h1>
        <a href="/create-student">Create student</a>
        <ul>${studentList}</ul>
        `)
})

router.get('/students/:id', (req, res, next) => {
    const students = getDataDB('students')
    const { id } = req.params
    const foundStudent = students.find(student => student.id === id)
    
    const interestsList = foundStudent.interests.map(interest => `<li>${interest}</li>`).join('')
    // console.log(interest)

    if (foundStudent) {
        res.send(`
            <a href="/">Go back to home page</a>
            <a href="/students">All students</a>
            <form action="/delete-student" method="POST">
                <input type="hidden" name="studentId" value="${foundStudent.id}"/>
                <button type="submit">Delete student</button>
            </form>
            <a href="/edit-student/${id}">Edit student</a>
            <h1>Student:</h1>
            <h2>${foundStudent.name} ${foundStudent.surname}</h2>
            <p>Age: ${foundStudent.age}</p>
            <h3>${foundStudent.interests && foundStudent.interests.length === 1 ? 'Interest:' : foundStudent.interests.length > 1 ? 'Interests:' : 'No interests'}</h3>
            <ul>${interestsList}</ul>
        `)
    } else {
        res.send(`
            <h1>Page not Found</h1>
            <a href="/">Go back to home page</a>
            `)
    }

})

router.get('/create-student', (req, res, next) => {
    res.send(`
        <h1>Create Student</h1>

        <form action="/student-created" method="POST">
        <div>
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" />
        </div>
        <div>
            <label for="surname">Surname:</label>
            <input type="text" name="surname" id="surname" />
        </div>
        <div>
            <label for="age">Age:</label>
            <input type="number" name="age" id="age" />
        </div>
        <div>
            <label for="city">City:</label>
            <input type="text" name="city" id="city" />
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="text" name="email" id="email" />
        </div>
        <div>
            <label for="interests">Select your interests:</label><br />

            <input type="checkbox" name="interests" value="Reading" id="reading" />
            <label for="reading">Reading</label><br />

            <input type="checkbox" name="interests" value="Traveling" id="traveling" />
            <label for="traveling">Traveling</label><br />

            <input type="checkbox" name="interests" value="Music" id="music" />
            <label for="music">Music</label><br />

            <input type="checkbox" name="interests" value="Sports" id="sports" />
            <label for="sports">Sports</label><br />
        </div>

        <div>
            <label for="newsletter">Subscribe for newsletters:</label>
            <input type="checkbox" name="newsletter" id="newsletter" value="yes" checked />
        </div>

        <button type="submit">Submit</button>

        </form>

        `)
})

router.post('/student-created', (req, res, next) => {

// cia darome, kad visada butu Array objekte, nes jei pridedame viena interest sukurdavo stringa, jei nei vieno - visiskai nieko. dabar visada bus Array. O tai reikalinga nes masyvo ciklus leidziam.
    
    const interests = []

    if (req.body.interests) {
        if(typeof req.body.interests === 'string') {
            interests.push(req.body.interests)
        } else {
            interests.push(...req.body.interests)
        }
    }

    const newStudent = {...req.body, id: uuid(), interests}
    updatedDataDB('students', newStudent)
    // students.push(newStudent)

    res.redirect(`/students/${newStudent.id}`)
})

router.post('/delete-student', (req, res, next) => {
    const students = getDataDB('students')
    const { studentId } = req.body

    const filteredStudent = students.filter(student => student.id !== studentId)
    editDataDB('students', filteredStudent)
    res.redirect(`/students`)
})

router.get('/edit-student/:id', (req, res, next) => {
    const students = getDataDB('students')
    const { id } = req.params
    const editedStudent = students.find(student => student.id === id)
    const { name, surname, age, city, email, interests, newsletter } = editedStudent


    res.send(`
        <h1>Edit student ${id}</h1>

        <form action="/student-edited" method="POST">
        <div>
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" value="${name}"/>
        </div>
        <div>
            <label for="surname">Surname:</label>
            <input type="text" name="surname" id="surname" value="${surname}"/>
        </div>
        <div>
            <label for="age">Age:</label>
            <input type="number" name="age" id="age" value="${age}"/>
        </div>
        <div>
            <label for="city">City:</label>
            <input type="text" name="city" id="city" value="${city}"/>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="text" name="email" id="email" value="${email}"/>
        </div>
        <div>
            <label for="interests">Select your interests:</label><br />

            <input type="checkbox" name="interests" value="Reading" id="reading" ${interests.includes('Reading') ? 'checked' : ''}/>
            <label for="reading">Reading</label><br />

            <input type="checkbox" name="interests" value="Traveling" id="traveling" ${interests.includes('Traveling') ? 'checked' : ''}/>
            <label for="traveling">Traveling</label><br />

            <input type="checkbox" name="interests" value="Music" id="music" ${interests.includes('Music') ? 'checked' : ''}/>
            <label for="music">Music</label><br />

            <input type="checkbox" name="interests" value="Sports" id="sports" ${interests.includes('Sports') ? 'checked' : ''}/>
            <label for="sports">Sports</label><br />
        </div>

        <div>
            <label for="newsletter">Subscribe for newsletters:</label>
            <input type="checkbox" name="newsletter" id="newsletter" value="true" checked />
        </div>

        <input type="hidden" value=${id} name="id"/>
        <button type="Edit">Submit</button>
        </form>

        `)
})

router.post('/student-edited', (req, res, next) => {
    const students = getDataDB('students')
    const { id } = req.body

    const updatedStudents = students.map(student => {
        if (student.id === id) {
            const interests = []
            if (req.body.interests) {
                if (typeof req.body.interests === 'string'){
                    interests.push(req.body.interests)
                } else {
                    interests.push(...req.body.interests)
                }
            }
            const updatedStudent = {
                ...student,
                ...req.body,
                interests,
            }

            return updatedStudent
        } else {
            return student
        }
    })
    editDataDB('students', updatedStudents)

    res.redirect(`/students/${id}`)
})

// exportuojame visa faila pabaigoje
module.exports = router