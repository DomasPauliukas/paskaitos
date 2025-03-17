const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended : true}))

const messages = []

app.get(`/`, (req, res, next) => {
    res.send(`
        <div>
            <h1>Hello, world!!!</h1>
            <ul>
                <li><a href="/form">Form</a></li>
            </ul>
        </div>
        `)
})

app.get('/messages', (req, res, next) => {
    const messagesList = messages.map(message => `<li>${message}</li>`).join('')
    res.send(`
        <h1>Messages:</h1>
        <ul>${messagesList}</ul>
        <a href="/form">Form</a>
        <a href="/">Go back to home page</a>
        `)
        
})

app.get(`/form`, (req, res, next) => {
    res.send(`
        <div>
            <h1>Hello, form page!</h1>
            <form action="/form-submitted" method="POST">
                <input type="text" name="message" />
                <button type="submit">Send</button>
            </form>
        </div>
        `)
})
// cia reikalingas body parser package. npm i body-parser
// cia dedame POST route, todel, kad rankiniu budu nepatektu i /form-submitted puslapi, nes tokiu atveju isves message undefined. o dabar yra POST route, todel i si puslapi pateksime, tik kai forma bus submitinta.

app.post(`/form-submitted`, (req, res, next) => {
   const { message } = req.body

   if (messages) {
       messages.push(message)
   }

   res.redirect('/messages')
})

app.get('*', (req, res, next) => {
    res.send(`
        <h1>Page not found</h1>
        <a href="/">Go back to home page</a>
        `)
})





const PORT = 3000
app.listen(PORT, () => {console.log(`server is running on port ${PORT}`)})

