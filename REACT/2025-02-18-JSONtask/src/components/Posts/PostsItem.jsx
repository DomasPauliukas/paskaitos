import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function PostsItem () {

const { id } = useParams()
const [post, setPost] = useState(null)

useEffect(() => {
    async function fetchPost() {
       const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}?_expand=user&_embed=comments`)
       const postData = await res.json()
       setPost(postData)
    }
       fetchPost()
}, [id])

    if(!post) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <h1>Post: {post.title}</h1>
            <p>{post.body}</p>
            <p>Written by : 
                <Link to={`/Users/${post.user.id}`}>{post.user.name}</Link>
            </p>

            <h5>Comments:</h5>

            {post.comments && (
                post.comments.map((comment, index) => (
                    <li key={index}>
                     <Link to={`/Comments/${comment.id}`}>{comment.body}</Link>
                    </li>
                ))
            )}
        </div>
    )
}

export default PostsItem