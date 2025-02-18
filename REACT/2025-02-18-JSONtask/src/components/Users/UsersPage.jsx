import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function UsersPage () {
const [users, setUsers] = useState([])

useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?_embed=posts`)
    .then(res => res.json())
    .then(usersData => {
        setUsers(usersData)
    })
}, [])


    return (
    <div>
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