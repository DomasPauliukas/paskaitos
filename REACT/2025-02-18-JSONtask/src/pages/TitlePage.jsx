import { Link } from "react-router-dom"

function TitlePage () {

    return (
        <div>

        <div className="jsonItem">
            <h2>Albums</h2>
            <Link to={'/Albums'}>open</Link>
        </div>
        <div className="jsonItem">
            <h2>Comments</h2>
            <Link to={'/Comments'}>open</Link>
        </div>
        <div className="jsonItem">
            <h2>Posts</h2>
            <Link to={'/Posts'}>open</Link>
        </div>
        <div className="jsonItem">
            <h2>Users</h2>
            <Link to={'/Users'}>open</Link>
        </div>




        </div>
    )
}

export default TitlePage