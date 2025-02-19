import { useEffect, useState } from "react"
import { API_URL } from "../APIaddress"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function CreateAlbum () {
let navigate = useNavigate()
const [users, setUsers] = useState('')
const [title, setTitle] = useState('')
const [selectUser, setSelectUser] = useState('')

useEffect(() => {
    async function fetchUsers() {
        
        const { data } = await axios(`${API_URL}/users`)
        console.log(data)
        setUsers(data)
        setSelectUser(data[0].id)
        // const res = await fetch(`${API_URL}/users`)
        // const usersData = await res.json()
        // setUsers(usersData)
        // setSelectUser(usersData[0].id)
    }
    fetchUsers()
}, [])

const titleHandler = (event) => {setTitle(event.target.value)}
const selectUserHandler = event => {setSelectUser(event.target.value)}

const albumSubmitHandler = async event => {
    event.preventDefault()

    const newAlbum = {
        title,
        userId: selectUser
    }

    await axios.post(`${API_URL}/albums`, newAlbum)
    setSelectUser(users[0].id)
    navigate(`/Albums`)
}

    return (
        <div>
            <div>CreateAlbum</div>

            <form onSubmit={albumSubmitHandler}>
                <div className="formControl">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title" onChange={titleHandler} value={title} />
                </div>

            {users && (

                <div className="formControl">
                    <label htmlFor="selecetUser">select user: </label>
                    <select name="selectUser" id="selectUser" onChange={selectUserHandler} value={selectUser} >
                {users.map((user, index) => (
                    <option key={index} value={user.id}>{user.name}</option>
                ))}
                    </select>
                </div>
            )}

            <button type="submit">Add album</button>
            </form>
        </div>
    )
}
export default CreateAlbum