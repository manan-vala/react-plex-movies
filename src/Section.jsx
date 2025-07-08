import { useEffect, useState } from "react";
import axios from "axios";
import "./Section.css";

const url = "https://jsonfakery.com/movies/paginated";

export default function Section() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        setMovies(res.data.data);
      } catch {}
    })();
  }, []);

  return (
    <div className="section">
      <div className="section-content">
        <h1>Movies</h1>
        <div className="movie-content">
          {movies.map((m) => (
            <div className="movie-1" key={m.id}>
              <img src={m.poster_path} alt={m.original_title} />
              <p>{m.original_title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}