import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { API_URL } from "../APIaddress"
import axios from "axios"
import HomeNav from "../HomeNav"

function UsersPage () {
const [users, setUsers] = useState([])

useEffect(() => {
    fetch(`${API_URL}/users?_embed=posts`)
    .then(res => res.json())
    .then(usersData => {
        setUsers(usersData)
    })
}, [])

const deleteUserHandler = (event) => {
    const userId = event.target.value
    axios.delete(`${API_URL}/users/${userId}`)
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId))
}

    return (
    <div>
        <button>
            <Link to={`/Users/Create`}>Create User</Link>
        </button>
        <div>UsersPage</div>

        {users.map((user, index) => (
            <li key={index}>
            <Link to={`/Users/${user.id}`}>{user.name} (Posts: {user.posts.length})</Link>
            <button onClick={deleteUserHandler} value={user.id}>delete user</button>
            </li>
        ))}

        <HomeNav/>
    </div>
    )
}

export default UsersPage