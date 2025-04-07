import { NavLink } from "react-router-dom"
import './PageNavigator.css'
import LogoutButton from "../logoutButton/LogoutButton"

const PageNavigator: React.FC = () => {

    return (
        <div className="pageNavigators">
            <LogoutButton/>
            <NavLink to={'/'} end>Home page</NavLink>
            <NavLink to={'/Students'} end>Students</NavLink>
            <NavLink to={'/Lecturers'} end>Lecturers</NavLink>
            <NavLink to={'/Subjects'} end>Subjects</NavLink>
            <NavLink to={'/Groups'} end>Groups</NavLink>
            <NavLink to={'/Languages'} end>Languages</NavLink>
            <NavLink to={'/login'} end>Login</NavLink>
            <NavLink to={'/register'} end>Register</NavLink>
            <NavLink to={'/profile'} end>Profile</NavLink>
        </div>
    )
}

export default PageNavigator