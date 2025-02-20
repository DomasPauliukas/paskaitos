import FormPosts from "./FormPosts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../APIaddress";

function EditPost() {
  const { id } = useParams();
  const [postData, setPostData] = useState("");
  useEffect(() => {
    async function fetchPost() {
      const { data } = await axios(`${API_URL}/posts/${id}`);
      setPostData(data);
    }
    fetchPost();
  }, [id]);
  return (
    <div>
      <h2>Edit post</h2>

      <FormPosts editPostData={postData} />
    </div>
  );
}
export default EditPost;
