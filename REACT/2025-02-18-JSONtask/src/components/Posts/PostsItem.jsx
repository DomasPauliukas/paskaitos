import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { API_URL } from "../APIaddress"
import axios from "axios"
import HomeNav from "../HomeNav"

function PostsItem () {

const { id } = useParams()
const [post, setPost] = useState('')
const [comments, setComments] = useState('')
let navigate = useNavigate()

useEffect(() => {
    async function fetchPost() {
       const res = await fetch(`${API_URL}/posts/${id}?_embed=user&_embed=comments`)
       const postData = await res.json()
       setPost(postData)
       setComments(postData.comments)
    }
       fetchPost()
}, [id])


const deletePostHandler = () => {
    fetch(`${API_URL}/posts/${id}`, {
        method: 'DELETE',
      });
    navigate(`/Posts`)
}

const deleteCommentHandler = (event) => {
    const commentId = event.target.value
    axios.delete(`${API_URL}/comments/${commentId}`)
    setComments((prevComments) => {return prevComments.filter(comment => comment.id !== commentId)})
}


    if(!post) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <h1>Post ({post.id}): {post.title}</h1>
            <p>{post.body}</p>
            <p>Written by : 
                <Link to={`/Users/${post.user.id}`}> {post.user.name}</Link>
            </p>

            <h5>Comments:</h5>
            <button>
                <Link to={`/Comments/Create/${post.id}`}>Create Comment</Link>
            </button>

            {comments && (
                comments.map((comment, index) => (
                    <li key={index}>
                     <Link to={`/Comments/${comment.id}`}>{comment.body} (ID: {comment.id})</Link>
                     <button value={comment.id} onClick={deleteCommentHandler}>remove</button>
                    </li>
                ))
            )}

            <button onClick={deletePostHandler}>delete post</button>
            <HomeNav/>
        </div>
    )
}

export default PostsItem