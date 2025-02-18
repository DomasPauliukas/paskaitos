import { useState } from "react"
import { useEffect } from "react"

function AlbumPage () {

const [albumData, setAlbumData] = useState('')

useEffect(() => {
    async function fetchAlbums () {
        const res = await fetch('https://jsonplaceholder.typicode.com/albums')
        const albums = await res.json()
        setAlbumData(albums)
    }
    fetchAlbums()
})

    return (
        <div>
            <div>Album Page</div>
            {/* {albumData.map((album, index) => {
                <p key={index}>{album.title}</p>
            })}
             */}


        </div>
    )
}

export default AlbumPage