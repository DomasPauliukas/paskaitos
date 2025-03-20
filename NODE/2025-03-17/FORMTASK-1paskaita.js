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
let languages = [
    {
        id: uuid(),
        name: 'Javascript'
    },
    {
        id: uuid(),
        name: 'Node-JS'
    },
    {
        id: uuid(),
        name: 'React'
    },
    {
        id: uuid(),
        name: 'Python'
    },
]
let lecturers = [
    {
        id: uuid(),
        firstName: 'John',
        lastName: 'Doe',
        department: 'Science',
        email: 'johndoe@example.com',
        yearsOfExperience: 12,
        office: 'Room 204',
    },
    {
        id: uuid(),
        firstName: 'Jane',
        lastName: 'Smith',
        department: 'Science',
        email: 'janesmith@example.com',
        yearsOfExperience: 8,
        office: 'Room 305',
    },
    {
        id: uuid(),
        firstName: 'Emily',
        lastName: 'Johnson',
        department: 'Arts',
        email: 'emilyjohnson@example.com',
        yearsOfExperience: 15,
        office: 'Room 101',
    },
    {
        id: uuid(),
        firstName: 'David',
        lastName: 'Brown',
        department: 'Engineering',
        email: 'davidbrown@example.com',
        yearsOfExperience: 5,
        office: 'Room 204',
    },
    {
        id: uuid(),
        firstName: 'Sophia',
        lastName: 'Williams',
        department: 'Humanities',
        email: 'sophiawilliams@example.com',
        yearsOfExperience: 10,
        office: 'Room 312',
    }
];
let subjects = [
    { 
        id: uuid(),
        subject: 'Mathematics' 
    },
    {   
        id: uuid(), 
        subject: 'Physics' 
    },
    { 
        id: uuid(), 
        subject: 'Literature'
    },
    { 
        id: uuid(),
        subject: 'Computer Science' 
    },
    { 
        id: uuid(), 
        subject: 'Psychology' 
    }
];

app.get('/', (req, res, next) => {
    res.send(`
        <h1>Welcome</h1>
        <ul>
            <li><a href="/students">Student's List</a></li>
            <li><a href="/groups">Groups</a></li>
            <li><a href="/languages">Languages</a></li>
            <li><a href="/lecturers">Lecturers</a></li>
            <li><a href="/subjects">Subjects</a></li>
        </ul>
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

app.get('/create-student', (req, res, next) => {
    console.log(groups)
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
            const interests = []
            if (req.body.interests) {
                if (typeof req.body.interests === 'string'){
                    interests.push(req.body.interests)
                } else {
                    interests.push(...req.body.interests)
                }
            }
            const updatedStudent = {
                ...req.body,
                interests,
            }

            return updatedStudent
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



app.get('/languages', (req, res, next) => {
    const languagesList = languages.map(language => `<li><a href="/languages/${language.id}">${language.name}</a></li>`).join('')

    res.send(`
        <a href="/">Go back to home page</a>
        <a href="/create-language">Create language</a>
        <h1>Languages list:</h1>
        <ul>${languagesList}</ul>
        `)
})

app.get('/languages/:id', (req, res, next) => {
    const { id } = req.params
    const selectedLanguage = languages.find(language => language.id === id)
    res.send(`
        <h1>${selectedLanguage.name}</h1>
        <a href="/edit-language/${id}">Edit language</a>

        <form action="/delete-language" method="POST">
            <input type="hidden" name="id" value="${id}"/>
            <button type="submit">Delete language</button>
        </form>
        <a href="/">Go back to home page</a>

        `)
})

app.get('/create-language', (req, res, next) => {

    res.send(`
        <h1>Create language:</h1>
        <form action="/language-created" method="POST">
            <div>
                <label for="language">Add new Language:</label>
                <input type="text" name="name" id="language"/>

                <button type="submit">Add</button>
            </div>
        </form>
        `)
})

app.post('/language-created', (req, res, next) => {
    const newLanguage = {...req.body, id: uuid()}
    languages.push(newLanguage)

    res.redirect('/languages')
})

app.get('/edit-language/:id', (req, res, next) => {
    const { id } = req.params
    const editedLanguage = languages.find(language => language.id === id)

    res.send(`
        <h1>Edit language</h1>
        <form action="/language-edited" method="POST">
            <div>
                <label for="language">Edit language:</label>
                <input type="text" name="name" id="language" value="${editedLanguage.name}"/>

                <input type="hidden" name="id" value="${id}"/>
                <button type="submit">Edit</button>
            </div>
        </form>
        `)
})

app.post('/language-edited', (req, res, next) => {
    const { id } = req.body
    const editedLanguages = languages.map(language => {
        if (language.id === id) {
            return req.body
        } else {
            return language
        }
    })
    languages = editedLanguages

    res.redirect(`/languages`)
})

app.post(`/delete-language`, (req, res, next) => {
    const { id } = req.body
    const deletedLanguage = languages.filter(language => language.id !== id)
    languages = deletedLanguage
    res.redirect('/languages')
})




app.get('/lecturers', (req, res, next) => {
    const lecturersList = lecturers.map(lecturer => `<li><a href="/lecturers/${lecturer.id}">${lecturer.firstName} ${lecturer.lastName}</a></li>`).join('')

    res.send(`
        <a href="/">Go back to home page</a>
        <h1>Lecturers:</h1>
        <ul>${lecturersList}</ul>
        <a href="/create-lecturer">Create lecturer</a>
        `)
})

app.get('/lecturers/:id', (req, res, next) => {
    const { id } = req.params
    const selectedLecturer = lecturers.find(lecturer => lecturer.id === id)
    const { firstName, lastName, department, email, yearsOfExperience, office } = selectedLecturer
    res.send(`
        <a href="/">Go back to home page</a>
        <h1>Lecturer</h1>
        <ul>
            <li>First name: ${firstName}</li>
            <li>Last name: ${lastName}</li>
            <li>Department: ${department}</li>
            <li>Email: ${email}</li>
            <li>Experience: ${yearsOfExperience}</li>
            <li>Office: ${office}</li>
        </ul>

        <a href="/edit-lecturer/${id}">Edit lecturer</a>
        <form action="/delete-lecturer" method="POST">
            <input type="hidden" name="id" value="${id}"/>
            <button type="submit">Delete lecturer</button>
        </form>
        `)
})

app.get('/create-lecturer', (req, res, next) => {

    res.send(`
        <h1>Create lecturer:</h1>
        <form action="/lecturer-created" method="POST">
            <div>
                <label for="firstName">First name:</label>
                <input type="firstName" name="firstName" id="firstName"/>
            </div>
            <div>
                <label for="lastName">Last name:</label>
                <input type="lastName" name="lastName" id="lastName"/>
            </div>
            <div>
                <label for="department">Department:</label>
                <input type="department" name="department" id="department"/>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div>
                <label for="yearsOfExperience">Experience (years):</label>
                <input type="yearsOfExperience" name="yearsOfExperience" id="yearsOfExperience"/>
            </div>
            <div>
                <label for="office">Office:</label>
                <input type="office" name="office" id="office"/>
            </div>

            <button type="submit">Create lecturer</button>
        </form>
        `)
})

app.post('/lecturer-created', (req, res, next) => {
    const createdLecturers = {...req.body, id: uuid()}
    lecturers.push(createdLecturers)

    res.redirect('/lecturers')
})

app.get('/edit-lecturer/:id', (req, res, next) => {
    const { id } = req.params
    const editedLecturer = lecturers.find(lecturer => lecturer.id === id)
    const { firstName, lastName, department, email, yearsOfExperience, office } = editedLecturer

    res.send(`
        <h1>Edit lecturer:</h1>
        <form action="/lecturer-edited" method="POST">
            <div>
                <label for="firstName">First name:</label>
                <input type="firstName" name="firstName" id="firstName" value="${firstName}"/>
            </div>
            <div>
                <label for="lastName">Last name:</label>
                <input type="lastName" name="lastName" id="lastName" value="${lastName}"/>
            </div>
            <div>
                <label for="department">Department:</label>
                <input type="department" name="department" id="department" value="${department}"/>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" value="${email}"/>
            </div>
            <div>
                <label for="yearsOfExperience">Experience (years):</label>
                <input type="yearsOfExperience" name="yearsOfExperience" id="yearsOfExperience" value="${yearsOfExperience}"/>
            </div>
            <div>
                <label for="office">Office:</label>
                <input type="office" name="office" id="office" value="${office}"/>
            </div>

            <input type="hidden" name="id" value="${id}"/>
            <button type="submit">Edit lecturer</button>
        </form>
        
        `)
})

app.post('/lecturer-edited', (req, res, next) => {
    const { id } = req.body
    const editedLecturers = lecturers.map(lecturer => {
        if(lecturer.id === id) {
            return req.body
        } else {
            return lecturer
        }
    })
    lecturers = editedLecturers
    res.redirect('/lecturers')
})

app.post('/delete-lecturer', (req, res, next) => {
    const { id } = req.body

    const deletedLecturer = lecturers.filter(lecturer => lecturer.id !== id)
    lecturers = deletedLecturer

    res.redirect('/lecturers')
})




app.get('/subjects', (req, res, next) => {
    const subjectsList = subjects.map(subject => `<li><a href="/subjects/${subject.id}">${subject.subject}</a></li>`).join('')
    res.send(`
        <a href="/">Go back to home page</a>
        <a href="/create-subject">Create subject</a>
        <h1>Subjects:</h1>
        <ul>${subjectsList}</ul>
        `)
})

app.get('/subjects/:id', (req, res, next) => {
    const { id } = req.params
    const selectedSubject = subjects.find(subject => subject.id === id)

    res.send(`
        <a href="/">Go back to home page</a>
        <h1>${selectedSubject.subject}</h1>
        <a href="/edit-subject/${id}">Edit subject</a>
        <form action="/delete-subject" method="POST">
            <input type="hidden" name="id" value="${id}"/>
            <button type="submit">Delete subject</button>
        </form>
        `)
    
})

app.get('/create-subject', (req, res, next) => {

    res.send(`
        <h1>Create subject:</h1>
        <form action="/subject-created" method="POST">
            <div>
                <label for="subject">Subject name:</label>
                <input type="text" name="subject" id="subject"/>

                <button type="submit">Create</button>
            </div>
        </form>
        `)
    
})

app.post('/subject-created', (req, res, next) => {
    const newSubject = {...req.body, id: uuid()}
    subjects.push(newSubject)

    res.redirect('/subjects')
})

app.get('/edit-subject/:id', (req, res, next) => {
    const { id } = req.params
    const editedSubject = subjects.find(subject => subject.id === id)
    
    res.send(`
        <h1>Edit subject:</h1>
        <form action="/subject-edited" method="POST">
            <div>
                <label for="subject">Subject name:</label>
                <input type="text" name="subject" id="subject" value="${editedSubject.subject}"/>

                <input type="hidden" name="id" value="${id}"/>
                <button type="submit">Edit</button>
            </div>
        </form>
        `)
})

app.post('/subject-edited', (req, res, next) => {
    const { id } = req.body
    const editedSubject = subjects.map(subject => {
        if (subject.id === id) {
            return req.body
        } else {
            return subject
        }
    })
    subjects = editedSubject
    res.redirect('/subjects')
    
})

app.post('/delete-subject', (req, res, next) => {
    const { id } = req.body
    const newSubjects = subjects.filter(subject => subject.id !== id)
    subjects = newSubjects

    res.redirect('/subjects')
})






app.get('*', (req, res, next) => {
    res.send(`
        <h1>Page not found</h1>
        <a href="/">Go back to home page</a>
        `)
})

const PORT = 3000
app.listen(PORT, () => {`App is running on port ${PORT}`})