import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../APIaddress";
import HomeNav from "../HomeNav";

function AlbumPage() {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const res = await fetch(`${API_URL}/albums?_embed=photos`);
        const albumsData = await res.json();
        setAlbums(albumsData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError("Something went wrong...");
      }
    }
    fetchAlbums();
  });

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <p>Data is loading</p>;
  }

  return (
    <div>
      <button>
        <Link to={`/Albums/Create`}>Create Album</Link>
      </button>
      <div>Album Page</div>
      {albums.map((album, index) => (
        <li key={index}>
          <Link to={`/Albums/${album.id}`}>
            {album.id}. {album.title} ({album.photos.length} photos)
          </Link>
        </li>
      ))}

      <HomeNav />
    </div>
  );
}

export default AlbumPage;
