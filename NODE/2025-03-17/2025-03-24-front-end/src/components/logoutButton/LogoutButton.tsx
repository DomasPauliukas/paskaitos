import { useNavigate } from "react-router-dom"

const LogoutButton: React.FC = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const logoutHandler = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    if (token) {
        return (
            <button onClick={logoutHandler}>Logout</button>
        )
    }

}
export default LogoutButton