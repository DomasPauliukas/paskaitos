import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function CommentsPage () {

const [comments, setComments] = useState([])

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_expand=post&_limit=20')
    .then(res => res.json())
    .then(comment => {
        setComments(comment)
    })
}, [])

return (
        <div>
            <div>CommentsPage</div>
            {comments.map((comment, index) => (
                <li key={index}>
                    <Link to={`/Comments/${comment.id}`}>{comment.id}. {comment.name} (Post id - {comment.post.id})</Link>
                </li>
            ))}


        </div>
    )
}

export default CommentsPage


// https://jsonplaceholder.typicode.com/comments?_expand=post