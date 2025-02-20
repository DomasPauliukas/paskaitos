import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../APIaddress";
import axios from "axios";

function CommentForm(props) {
  const { editCommentData } = props;
  const { id } = useParams();
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const nameHandler = (event) => setName(event.target.value);
  const bodyHandler = (event) => setBody(event.target.value);

  useEffect(() => {
    if (editCommentData) {
      setName(editCommentData.name);
      setBody(editCommentData.body);
    }
  }, [editCommentData]);

  const addCommentHandler = (event) => {
    event.preventDefault();

    const newComment = {
      name,
      body,
      postId: editCommentData ? editCommentData.postId : id,
    };

    if (editCommentData) {
      axios.put(`${API_URL}/comments/${editCommentData.id}`, newComment);
      navigate(`/Comments/${editCommentData.id}`);
    } else {
      axios.post(`${API_URL}/comments`, newComment);
      navigate(`/Posts/${id}`);
    }
  };
  return (
    <div>
      <form onSubmit={addCommentHandler}>
        <div className="formControl">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={nameHandler}
            value={name}
          />
        </div>

        <div className="formControl">
          <label htmlFor="body">Body: </label>
          <input
            type="text"
            name="body"
            id="body"
            onChange={bodyHandler}
            value={body}
          />
        </div>

        <button type="submit">
          {editCommentData ? "Edit comment" : "Add comment"}
        </button>
      </form>
    </div>
  );
}
export default CommentForm;
