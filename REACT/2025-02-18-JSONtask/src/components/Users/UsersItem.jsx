import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../APIaddress"
import HomeNav from "../HomeNav"

function UsersItem () {
const { id } = useParams()
const [user, setUser] = useState([])

useEffect(() => {
    fetch(`${API_URL}/users/${id}?_embed=posts`)
    .then(res => res.json())
    .then(userData => {
        setUser(userData)
    })
}, [id])

if(!user) {
    return <div>Loading...</div>
}
    return (

        <div>
            <h1>{user.name}</h1>

            <h2>Users Posts:</h2>

            {user.posts && (
                user.posts.map((post, index) => (
                    <li key={index}>
                        <Link to={`/Posts/${post.id}`}>{post.title} (ID: {post.id})</Link>
                    </li>
                ))
                
            )}

<HomeNav/>
        </div>
    )
}

export default UsersItem