import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { API_URL } from "../APIaddress"
import HomeNav from "../HomeNav"
import axios from "axios"

function CommentsItem () {
let navigate = useNavigate()
const { id } = useParams()    
const [comment, setComment] = useState('')

useEffect(() => {
    async function fetchComment() {
        const res = await fetch(`${API_URL}/comments/${id}?_embed=post`)
        const commentData = await res.json()
        setComment(commentData)
    }
    fetchComment()
}, [])

const deleteCommentHandler = (event) => {
    const commentId = event.target.value
    axios.delete(`${API_URL}/comments/${commentId}`)
    navigate(`/Comments`)
}

if(!comment) {
    return <div>Loading...</div>
}
    return (
        <div>
            <h1>({comment.id}) Comment title - {comment.name}</h1>
            <button onClick={deleteCommentHandler} value={comment.id}>Delete comment</button>
            <h3>Post: <Link to={`/Posts/${comment.postId}`}>{comment.post.title}</Link></h3>
            <h3>Comment: {comment.body}</h3>

        <HomeNav/>
        </div>
    )
}

export default CommentsItem