import { Navigate } from "react-router-dom"
import { useAuth } from "../../AuthContext"
import { useState } from "react"
import api from "../../api"

const ProfilePage: React.FC = () => {
    const { user, loading, logoutUser, updateUser } = useAuth()
    const [username, setUsername] = useState(user?.username)

    if (loading) {
        return <p>Loading...</p>
    }

    
    if (!user) {
        return <Navigate to={'/login'}/>
    }
    
    const isExpired = user.exp * 1000 < Date.now()

    if (isExpired) {
        logoutUser()
        return <Navigate to={'/login'}/>
    }

    const usernameHandler = (event) => {setUsername(event.target.value)}

    const submitHandler = async (event) => {
        event.preventDefault()

        console.log('veikia')

        try {
            const { data } = await api.put('users/update', {username}) // sitas endpoint turi buti backende/ {username} - perduodame objekta to ka editiname
            const { user } = data

            updateUser(user)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
            <h1>Profile page</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            
            <form onSubmit={submitHandler}>

            <div className="formControl">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={username} onChange={usernameHandler} />
            </div>

            <button type="submit">Edit</button>
            </form>
        </div>
    )
}

export default ProfilePage