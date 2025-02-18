import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function AlbumItem () {
const { id } = useParams()
const [album, setAlbum] = useState('')

useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}?_embed=photos&_expand=user`)
    .then(res => res.json())
    .then(albumData =>{
        setAlbum(albumData)
    })
}, [])

console.log(album.user.name)

    return (
        <div>Album Item</div>
    )
}

export default AlbumItem