import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../APIaddress";
import { useParams } from "react-router-dom";
import AlbumForm from "./AlbumForm";

function EditAlbum() {
  const { id } = useParams();
  const [album, setAlbum] = useState("");

  useEffect(() => {
    async function fetchAlbum() {
      const { data } = await axios(`${API_URL}/albums/${id}`);
      setAlbum(data);
    }
    fetchAlbum();
  }, []);
  return (
    <div>
      <h1>Edit Album</h1>

      <AlbumForm editAlbumData={album} />
    </div>
  );
}
export default EditAlbum;
