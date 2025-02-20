import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../APIaddress";

function EditComment() {
  const { id } = useParams();
  const [comment, setComment] = useState("");

  useEffect(() => {
    async function fetchComment() {
      const { data } = await axios(`${API_URL}/comments/${id}`);
      setComment(data);
    }
    fetchComment();
  }, []);

  return (
    <div>
      <h1>Edit Comment</h1>

      <CommentForm editCommentData={comment} />
    </div>
  );
}
export default EditComment;
