const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}))

const { v4: uuid } = require('uuid')  // npm i uuid

let students = [
    {
        id: uuid(),
        name: 'Domas',
        surname: 'Pauliukas',
        age: 29,
        interests: ['Music', 'Traveling'],
        city: 'Kaunas',
        email: 'Domas0319@gmail.com',
    },
    {
        id: uuid(),
        name: 'Tomas',
        surname: 'Kuzas',
        age: 35,
        interests: ['Sports'],
        city: 'Vilnis',
        email: 'Tomas1013@gmail.com',
    }
]
let groups = [
    {
        id: uuid(),
        number: 20,
        name: 'Alfa'
    },
    {
        id: uuid(),
        number: 21,
        name: 'Beta'
    },
    {
        id: uuid(),
        number: 22,
        name: 'Gama'
    },
    {
        id: uuid(),
        number: 23,
        name: 'Delta'
    },
    {
        id: uuid(),
        number: 24,
        name: 'Epsilon'
    },
    {
        id: uuid(),
        number: 25,
        name: 'Zera'
    }
]

app.get('/', (req, res, next) => {
    res.send(`
        <h1>Welcome</h1>
        <a href="/students">Student's List</a>
        <a href="/groups">Groups</a>


        `)
})

app.get('/students', (req, res, next) => {

    const studentList = students.map(student => `<li><a href="/students/${student.id}">${student.name} ${student.surname}</a></li>`).join('')

    res.send(`
        <a href="/">Go back to home page</a>
        <h1>Student's List</h1>
        <a href="/create-student">Create student</a>
        <ul>${studentList}</ul>
        `)
})

app.get('/students/:id', (req, res, next) => {
    const { id } = req.params
    const foundStudent = students.find(student => student.id === id)

    const interestsList = foundStudent.interests.map(interest => `<li>${interest}</li>`).join('')


    if (foundStudent) {
        res.send(`
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

app.get('/create-student', (req, res, next) => {
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

app.post('/student-created', (req, res, next) => {
    const newStudent = {...req.body, id: uuid()}
    students.push(newStudent)

    res.redirect(`/students/${newStudent.id}`)
})

app.post('/delete-student', (req, res, next) => {
    const { studentId } = req.body

    const filteredStudent = students.filter(student => student.id !== studentId)
    students = filteredStudent
    res.redirect(`/students`)
})

app.get('/edit-student/:id', (req, res, next) => {
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

app.post('/student-edited', (req, res, next) => {
    const { id } = req.body
    const updatedStudents = students.map(student => {
        if (student.id === id) {
            return req.body
        } else {
            return student
        }
    })
    students = updatedStudents

    res.redirect(`/students/${id}`)
})



app.get('/groups', (req, res, next) => {
    const groupsList = groups.map(group => `<li><a href="/groups/${group.id}">Number: ${group.number}</a></li>`).join('')
    res.send(`
        <a href="/">Go back to home page</a>
        <a href="/create-group">Create group</a>
        <h1>Groups:</h1>
        <ul>${groupsList}</ul>
        `)
})

app.get('/groups/:id', (req, res, next) => {
    const { id } = req.params
    const selectedGroup = groups.find(group => group.id === id)
    const { name, number } = selectedGroup
    res.send(`
        <a href="/">Go back to home page</a>
        <h1>Group: ${name} (number: ${number})</h1>
        <a href="/edit-group/${id}">Edit group</a>
        <form action="/delete-group" method="POST">
            <input type="hidden" name="id" value="${id}"/>
            <button type="submit">Delete group</button>
        </form>
        `)
})

app.get('/create-group', (req, res, next) => {
    res.send(`
        <h1>Create group:</h1>
        <form action="/group-created" method="POST">
          <div>
            <label for="name">Group name:</label>
            <input type="text" name="name" id="name"/>
          </div>
          <div>
            <label for="number">Group number:</label>
            <input type="number" name="number" id="number"/>
          </div>
          

            <button type="submit">Create</button>
        </form>
        `)
})

app.post('/group-created', (req, res, next) => {
    const newGroup = {...req.body, id: uuid()}
    groups.push(newGroup)
    res.redirect(`/groups`)
})

app.get('/edit-group/:id', (req, res, next) => {
    const { id } = req.params
    const editedGroup = groups.find(group => group.id === id)
    const { name, number } = editedGroup

    res.send(`
        <h1>Edit group:</h1>

        <form action="/group-edited" method="POST">
          <div>
            <label for="name">Group name:</label>
            <input type="text" name="name" id="name" value="${name}"/>
          </div>
          <div>
            <label for="number">Group number:</label>
            <input type="number" name="number" id="number" value="${number}"/>
          </div>

            <input type="hidden" name="id" value="${id}"/>
            <button type="submit">Edit</button>
        </form>
        `)
})

app.post('/group-edited', (req, res, next) => {
    const { id } = req.body
    const editedGroup = groups.map(group => {
        if( group.id === id) {
            return req.body
        } else {
            return group
        }
    })
    groups = editedGroup
    res.redirect(`/groups/${id}`)

})

app.post('/delete-group', (req, res, next) => {
    const { id } = req.body
    const deletedGroup = groups.filter(group => group.id !== id)
    groups = deletedGroup

    res.redirect('/groups')
})










app.get('*', (req, res, next) => {
    res.send(`
        <h1>Page not found</h1>
        <a href="/">Go back to home page</a>
        `)
})

const PORT = 3000
app.listen(PORT, () => {`App is running on port ${PORT}`})