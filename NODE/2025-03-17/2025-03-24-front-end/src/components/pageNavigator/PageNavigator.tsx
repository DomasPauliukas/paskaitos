import { NavLink } from "react-router-dom"
import './PageNavigator.css'
import LogoutButton from "../logoutButton/LogoutButton"
import { useAuth } from "../../AuthContext"

const PageNavigator: React.FC = () => {

    const { user } = useAuth()
    
    return (
        <div className="pageNavigators">
            <NavLink to={'/'} end>Home page</NavLink>
            <NavLink to={'/Students'} end>Students</NavLink>
            <NavLink to={'/Lecturers'} end>Lecturers</NavLink>
            <NavLink to={'/Subjects'} end>Subjects</NavLink>
            <NavLink to={'/Groups'} end>Groups</NavLink>
            <NavLink to={'/Languages'} end>Languages</NavLink>
            {user ? (
                <>
                <NavLink to={'/dashboard'} end>Dashboard</NavLink>
                <NavLink to={'/dashboard/profile'} end>Profile</NavLink>
                <NavLink to={'/dashboard/settings'} end>Settings</NavLink>
                <LogoutButton/>
                </>
            ):(
                <>
                <NavLink to={'/login'} end>Login</NavLink>
                <NavLink to={'/register'} end>Register</NavLink>
                </>
            )}
        </div>
    )
}

export default PageNavigator