import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function PostsPage () {

const [posts, setPosts] = useState([])

useEffect(() => {
    async function fetchPosts() {
        const res = await fetch (`https://jsonplaceholder.typicode.com/posts?_expand=user`)
        const post = await res.json()
        setPosts(post)
    }
    fetchPosts()
}, [])
    return (
        <div>
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

