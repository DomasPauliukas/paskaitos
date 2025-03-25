import { Link } from "react-router-dom"
import './HomePage.css'

const HomePage = () => {

    return (
        <div>
            <h1>Home Page</h1>
            <div className="linkContainer">
                <Link to={'/Students'}>Students</Link>
                <Link to={'/Lecturers'}>Lecturers</Link>
                <Link to={'/Subjects'}>Subjects</Link>
                <Link to={'/Groups'}>Groups</Link>
                <Link to={'/Languages'}>Languages</Link>
            </div>
        </div>
    )
}

export default HomePage