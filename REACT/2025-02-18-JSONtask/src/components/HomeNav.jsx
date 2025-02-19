import { Link } from "react-router-dom"

function HomeNav () {

    return(
        <div>
            <button>
                <Link to={`/`}>Home page</Link>
            </button>
        </div>
    )
}
export default HomeNav