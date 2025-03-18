const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}))

const person = []


app.get('/', (req, res, next) => {
    res.send(`
        <h1>Welcome</h1>
        <h2>Fill the form:</h2>
        <a href="/form">Form</a>
        `)
})

app.get('/form', (req, res, next) => {
    res.send(`
        <h1>Your information:</h1>
        <form action="/form-submitted" method="POST">
        <div>
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" required/>
        </div>
        <div>
            <label for="surname">Surname:</label>
            <input type="text" name="surname" id="surname" required/>
        </div>
        <div>
            <label for="age">Age:</label>
            <input type="number" name="age" id="age" required/>
        </div>
        <div>
            <label for="city">City:</label>
            <input type="text" name="city" id="city" required/>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="text" name="email" id="email" required/>
        </div>

        <div>
            <label for="newsletter">Subscribe for newsletters:</label>
            <input type="checkbox" name="newsletter" id="newsletter" value="yes" checked />
        </div>

        <button type="submit">Submit</button>

        </form>
        `)
})

app.post('/form-submitted', (req, res, next) => {
    const { name, surname, age, city, email, newsletter, interests} = req.body

    const newPerson = {
        name,
        surname,
        age,
        city,
        email,
        newsletter
    }
    
    person.push(newPerson)

    res.redirect('/person')
})

app.get('/person', (req, res, next) => {

    const personInfo = person.map(user => {
        const subscribe = user.newsletter === 'yes' ? `A special offer will be sent to your email` : ''
        console.log(user.newsletter)

        return `
          <h1>User:</h1>
          <li>Name: ${user.name}</li>
          <li>Surname: ${user.surname}</li>
          <li>Age: ${user.age}</li>
          <li>City: ${user.city}</li>
          <li>Email: ${user.email}</li>
          <p>${subscribe}</p>
        `}).join(''); 
    
    const title = person.length === 0 ? 'No users' : person.length === 1 ? 'User' : 'Users'


    res.send(`
        <h1>${title}</h1>
        <ul>${personInfo}</ul>
        <a href="/form">Form</a>
        <a href="/">Home page</a>
        `)
})

app.get('*', (req, res, next) => {
    res.send(`
        <h1>Page not found</h1>
        <a href="/">Go back to home page</a>
        `)
})



const PORT = 3000
app.listen(PORT, () => {`App is running on port ${PORT}`})



    // const interests = interestsList.length > 0 ? interestsList.map(interest => `<li>${interest}</li>`) : 'no interests selected'



{/* <div>
<label for="interests">Select your interests:</label><br />

<input type="checkbox" name="interests" value="Reading" id="reading" />
<label for="reading">Reading</label><br />

<input type="checkbox" name="interests" value="Traveling" id="traveling" />
<label for="traveling">Traveling</label><br />

<input type="checkbox" name="interests" value="Music" id="music" />
<label for="music">Music</label><br />

<input type="checkbox" name="interests" value="Sports" id="sports" />
<label for="sports">Sports</label><br />
</div> */}