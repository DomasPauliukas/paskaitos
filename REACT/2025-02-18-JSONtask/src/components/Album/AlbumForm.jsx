import { useEffect, useState } from "react";
import { API_URL } from "../APIaddress";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EditAlbum from "./EditAlbum";

function AlbumForm(props) {
  const { editAlbumData } = props;
  let navigate = useNavigate();

  const [users, setUsers] = useState("");
  const [title, setTitle] = useState("");
  const [selectUser, setSelectUser] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await axios(`${API_URL}/users`);
      setUsers(data);
      // const res = await fetch(`${API_URL}/users`)
      // const usersData = await res.json()
      // setUsers(usersData)
      // setSelectUser(usersData[0].id)

      if (editAlbumData) {
        setTitle(editAlbumData.title);
        setSelectUser(editAlbumData.userId);
      } else {
        setSelectUser(data[0].id);
      }
    }
    fetchUsers();
  }, [editAlbumData]);

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const selectUserHandler = (event) => {
    setSelectUser(event.target.value);
  };

  const albumSubmitHandler = async (event) => {
    event.preventDefault();

    const newAlbum = {
      title,
      userId: selectUser,
    };

    if (editAlbumData) {
      await axios.put(`${API_URL}/albums/${editAlbumData.id}`, newAlbum);
      navigate(`/Albums/${editAlbumData.id}`);
    } else {
      await axios.post(`${API_URL}/albums`, newAlbum);
      navigate(`/Albums`);
    }
  };
  return (
    <form onSubmit={albumSubmitHandler}>
      <div className="formControl">
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={titleHandler}
          value={title}
        />
      </div>

      {users && (
        <div className="formControl">
          <label htmlFor="selecetUser">select user: </label>
          <select
            name="selectUser"
            id="selectUser"
            onChange={selectUserHandler}
            value={selectUser}
          >
            {users.map((user, index) => (
              <option key={index} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <button type="submit">
        {editAlbumData ? "Edit album" : "Add album"}
      </button>
    </form>
  );
}
export default AlbumForm;
