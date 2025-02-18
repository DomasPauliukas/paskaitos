import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

function AlbumPage () {

const [albums, setAlbums] = useState([])

useEffect(() => {
    async function fetchAlbums () {
        const res = await fetch('https://jsonplaceholder.typicode.com/albums?_embed=photos&_expand=user')
        const albumsData = await res.json()
        setAlbums(albumsData)
    }
    fetchAlbums()
})

    return (
        <div>
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