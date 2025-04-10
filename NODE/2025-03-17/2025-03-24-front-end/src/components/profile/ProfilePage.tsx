import { Navigate } from "react-router-dom"
import { useAuth } from "../../AuthContext"

const ProfilePage: React.FC = () => {
    const { user, loading, logoutUser } = useAuth()

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
    
    return (
        <div>
            <h1>Profile page</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            
        </div>
    )
}

export default ProfilePage