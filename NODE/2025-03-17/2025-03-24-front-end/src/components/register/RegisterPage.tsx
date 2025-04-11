import axios from "axios"
import { useState } from "react"
import { API_URL } from "../API_URL"
import { useNavigate } from "react-router-dom"

const RegisterPage: React.FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()


    const usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {setUsername(event.target.value)}
    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {setEmail(event.target.value)}
    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {setPassword(event.target.value)}

    const registerHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        
        try {
            const userInfo = {
                username,
                email,
                password
            }
            await axios.post(`${API_URL}/users/register`, userInfo)
            navigate('/login')            
        } catch (error) {
            console.log('Failed to create user!', error) // galima ta error issivesti kur reikia FE, kurti state ir gauti kintamaji
        }
        
    }
    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={registerHandler}>

                <div className="form-control">
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" value={username} onChange={usernameHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" value={email} onChange={emailHandler}/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={password} onChange={passwordHandler}/>
                </div>

                <button type="submit">Create new user!</button>
            </form>
        </div>
    )
}

export default RegisterPage