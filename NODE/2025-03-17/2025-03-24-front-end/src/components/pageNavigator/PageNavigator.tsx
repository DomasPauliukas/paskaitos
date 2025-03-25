import { NavLink } from "react-router-dom"
import './PageNavigator.css'

const PageNavigator: React.FC = () => {

    return (
        <div className="pageNavigators">
            <NavLink to={'/'} end>Home page</NavLink>
            <NavLink to={'/Students'} end>Students</NavLink>
            <NavLink to={'/Lecturers'} end>Lecturers</NavLink>
            <NavLink to={'/Subjects'} end>Subjects</NavLink>
            <NavLink to={'/Groups'} end>Groups</NavLink>
            <NavLink to={'/Languages'} end>Languages</NavLink>
        </div>
    )
}

export default PageNavigator