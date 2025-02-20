import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../APIaddress";
import HomeNav from "../HomeNav";
import axios from "axios";

function AlbumItem() {
  const { id } = useParams();
  const [album, setAlbum] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/albums/${id}?_embed=user`)
      .then((res) => res.json())
      .then((albumData) => {
        setAlbum(albumData);
      });
  }, [id]);

  const deleteAlbumHandler = (event) => {
    const albumId = event.target.value;

    axios.delete(`${API_URL}/albums/${albumId}`);
    navigate(`/Albums`);
  };

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Album - {album.title}</h1>
      <p>
        By <Link to={`/Users/${album.user.id}`}>{album.user.name}</Link>
      </p>
      <button value={album.id} onClick={deleteAlbumHandler}>
        Delete album
      </button>
      <button>
        <Link to={`/Albums/edit/${album.id}`}>Edit album</Link>
      </button>

      <HomeNav />
    </div>
  );
}

export default AlbumItem;
