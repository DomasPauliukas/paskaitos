import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { API_URL } from "../APIaddress"

function AlbumPage () {

const [albums, setAlbums] = useState([])

useEffect(() => {
    async function fetchAlbums () {
        const res = await fetch(`${API_URL}/albums?_embed=photos`)
        const albumsData = await res.json()
        setAlbums(albumsData)
    }
    fetchAlbums()
})

    return (
        <div>
            <button>
                <Link to={`/Albums/Create`}>Create Album</Link>
            </button>
            <div>Album Page</div>
            {albums.map((album, index) => (
                <li key={index}>
                    <Link to={`/Albums/${album.id}`}>{album.id}. {album.title} ({album.photos.length} photos)</Link>
                </li>

            ))}
            


        </div>
    )
}

export default AlbumPage