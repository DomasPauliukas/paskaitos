import { Navigate } from "react-router-dom"
import LogoutButton from "../logoutButton/LogoutButton"

const ProfilePage: React.FC = () => {
    const token = localStorage.getItem('token')

    if (!token) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div>
            <h1>Profile page</h1>
            <p>token : {token}</p>
            <LogoutButton />
        </div>
    )
}

export default ProfilePage