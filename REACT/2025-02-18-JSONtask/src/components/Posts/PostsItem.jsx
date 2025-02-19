import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { API_URL } from "../APIaddress"

function PostsItem () {

const { id } = useParams()
const [post, setPost] = useState(null)
let navigate = useNavigate()


useEffect(() => {
    async function fetchPost() {
       const res = await fetch(`${API_URL}/posts/${id}?_embed=user&_embed=comments`)
       const postData = await res.json()
       setPost(postData)
    }
       fetchPost()
}, [id])


const deleteHandler = () => {
    fetch(`${API_URL}/posts/${id}`, {
        method: 'DELETE',
      });
    navigate(`/Posts`)
}


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

            <button onClick={deleteHandler}>delete</button>
        </div>
    )
}

export default PostsItem