import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { API_URL } from "../APIaddress"

function PostsPage () {

const [posts, setPosts] = useState([])

useEffect(() => {
    async function fetchPosts() {
        const res = await fetch (`${API_URL}/posts?_embed=user`)
        const post = await res.json()
        setPosts(post)
    }
    fetchPosts()
}, [])
    return (
        <div>
            <button>
                <Link to={`/Posts/Create`}>Create Post</Link>
            </button>
            <div>PostsPage</div>

        {posts.map((post, index) => (
            <li key={index}>
                <Link to={`/Posts/${post.id}`}>{post.id}. {post.title}</Link>
            </li>
        ))}



        </div>
    )
}

export default PostsPage

