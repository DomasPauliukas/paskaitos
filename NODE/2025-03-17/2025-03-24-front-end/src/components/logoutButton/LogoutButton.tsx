import { useNavigate } from "react-router-dom"
import { useAuth } from "../../AuthContext"

const LogoutButton: React.FC = () => {
    const { logoutUser} = useAuth()
    const navigate = useNavigate()
    const logoutHandler = () => {
        // localStorage.removeItem('token')
        logoutUser() // is konteksto
        navigate('/login')
    }

    return (
        <button onClick={logoutHandler}>Logout</button>
    )
}
export default LogoutButton