import { useEffect, useState } from "react";
import { API_URL } from "../APIaddress";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import axios from "axios"
function FormPosts(props) {
  const { editPostData } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [users, setUsers] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    async function fetchUserName() {
      const res = await fetch(`${API_URL}/users`);
      const userData = await res.json();
      setUsers(userData);
      if (editPostData) {
        setTitle(editPostData.title);
        setBody(editPostData.body);
        setSelectedUser(editPostData.userId);
      } else {
        setSelectedUser(userData[0].id);
      }
    }
    fetchUserName();
  }, [editPostData]);

  const titleHandler = (event) => setTitle(event.target.value);
  const bodyHandler = (event) => setBody(event.target.value);
  const selectedUserHandler = (event) => setSelectedUser(event.target.value);

  const PostSubmitHandler = async (event) => {
    event.preventDefault();

    if (!title || !body) {
      setError("You have to write post TITLE and BODY");
      return;
    }

    const newPost = {
      title,
      body,
      userId: selectedUser,
    };

    if (editPostData) {
      await axios.put(`${API_URL}/posts/${editPostData.id}`, newPost);
      navigate(`/Posts/${editPostData.id}`);
    } else {
      const res = await fetch(`${API_URL}/posts`, {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const newPostData = await res.json();
      setBody("");
      setTitle("");
      setSelectedUser(users[0].id);
      setError("");

      navigate(`/Posts/${newPostData.id}`);
    }

    // const {data} = await axios.post(`${API_URL}/posts`, newPost)
    // AXIOS - async fetchinimo funkcija. pirma parametra paduodame i kur ikelti, antra - ka ikeliame. {data} - destrukturizuotas is axios elemento. data tai yra visas objektas kuri POSTinam i json.
  };
  return (
    <div>
      <form onSubmit={PostSubmitHandler}>
        <div className="formControl">
          <label htmlFor="title">Post title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={titleHandler}
          />
        </div>
        <div className="formControl">
          <label htmlFor="body">Post body: </label>
          <textarea name="body" id="body" value={body} onChange={bodyHandler} />
        </div>

        {users && (
          <div className="formControl">
            <label htmlFor="selectUser">Select User: </label>
            <select onChange={selectedUserHandler} value={selectedUser}>
              {users.map((user, index) => (
                <option key={index} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        )}
        <button type="submit">{editPostData ? "Edit" : "create"}</button>

        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
export default FormPosts;
