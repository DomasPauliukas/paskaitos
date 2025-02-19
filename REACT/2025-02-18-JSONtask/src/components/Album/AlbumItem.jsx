import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../APIaddress"

function AlbumItem () {
const { id } = useParams()
const [album, setAlbum] = useState('')

useEffect(() => {
    fetch(`${API_URL}/albums/${id}?_embed=user`)
    .then(res => res.json())
    .then(albumData =>{
        setAlbum(albumData)
    })
}, [id])

if(!album) {
    return <div>Loading...</div>
}

    return (
        <div>
            <h1>Album - {album.title}</h1>
            <p>By <Link to={`/Users/${album.user.id}`}>{album.user.name}</Link></p>
        </div>
    )
}

export default AlbumItem