import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function CommentsItem () {

const { id } = useParams()    
const [comment, setComment] = useState('')

useEffect(() => {
    async function fetchComment() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}?_expand=post`)
        const commentData = await res.json()
        setComment(commentData)
    }
    fetchComment()
}, [])

if(!comment) {
    return <div>Loading...</div>
}
    return (
        <div>
            <h1>Comment title - {comment.name}</h1>
            <h3>Post: <Link to={`/Posts/${comment.postId}`}>{comment.post.title}</Link></h3>
            <h3>Comment: {comment.body}</h3>


        </div>
    )
}

export default CommentsItem