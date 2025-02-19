import { useState } from "react"
import { API_URL } from "../APIaddress"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function CreateUser () {

let navigate = useNavigate()

const [name, setName] = useState('')
const [username, setUsername] = useState('')
const [city, setCity] = useState('')
const [error, setError] = useState('')

const nameHandler = event => setName(event.target.value)
const usernameHandler = event => setUsername(event.target.value)
const cityHandler = event => setCity(event.target.value)


const createUserHandler = event => {
    event.preventDefault()

if (!name || !username || !city){
    return setError('All fields have to be filled!')
}
    const newUser = {
        name,
        username,
        city
    }

    axios.post(`${API_URL}/users`, newUser)
    setError('')
    navigate(`/Users`)
}

    return (
    <div>

        <div>CreateUser</div>

        <form onSubmit={createUserHandler}>
            <div className="formControl">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" onChange={nameHandler} value={name}/>
            </div>

            <div className="formControl">
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" onChange={usernameHandler} value={username}/>
            </div>

            <div className="formControl">
            <label htmlFor="city">City: </label>
            <input type="text" name="city" id="city" onChange={cityHandler} value={city}/>
            </div>

            <button type="submit">Create user</button>

            {error && <p>{error}</p>}
        </form>
    </div>
    )
}
export default CreateUser