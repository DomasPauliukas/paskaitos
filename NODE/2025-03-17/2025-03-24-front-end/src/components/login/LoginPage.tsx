import axios from "axios"
import { useState } from "react"
import { API_URL } from "../API_URL"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../AuthContext"

const LoginPage: React.FC = () => {
    const { loginUser } = useAuth()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {setEmail(event.target.value)}
    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {setPassword(event.target.value)}

    const LoginHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        
        try {
            const loginInfo = {email, password}
            const res = await axios.post(`${API_URL}/users/login`, loginInfo)
            const { token } = res.data

            if (token) {
                loginUser(token) // funkcija is konteksto
                // localStorage.setItem('token', token)
                navigate('/dashboard/profile')
            }
        } catch (error) {
            console.log('Failed to login!', error) // galima ta error issivesti kur reikia FE, kurti state ir gauti kintamaji
        }
        
    }
    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={LoginHandler}>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" value={email} onChange={emailHandler}/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={password} onChange={passwordHandler}/>
                </div>

                <button type="submit">Login!</button>
            </form>
        </div>
    )
}

export default LoginPage