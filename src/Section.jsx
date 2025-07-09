import { useEffect, useState } from "react";
import axios from "axios";
import "./Section.css";
import MovieCard from "./Props/MovieCard";
import { useNavigate } from "react-router-dom";

const url = "https://jsonfakery.com/movies/paginated";

export default function Section() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

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
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
