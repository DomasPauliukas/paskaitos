import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { API_URL } from "../APIaddress"

function UsersPage () {
const [users, setUsers] = useState([])

useEffect(() => {
    fetch(`${API_URL}/users?_embed=posts`)
    .then(res => res.json())
    .then(usersData => {
        setUsers(usersData)
    })
}, [])


    return (
    <div>
        <button>
            <Link to={`/Users/Create`}>Create User</Link>
        </button>
        <div>UsersPage</div>

        {users.map((user, index) => (
            <li key={index}>
            <Link to={`/Users/${user.id}`}>{user.name} (Posts: {user.posts.length})</Link>
            </li>
        ))}
    </div>
    )
}

export default UsersPage