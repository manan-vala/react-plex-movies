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
          {/* {movies.map((movie) => (
            <div
              className="movie-1"
              key={movie.id}
              onClick={() =>
                navigate(`/movies/${movie.movie_id}`, { state: movie })
              }
              style={{ cursor: "pointer" }}
            >
              <img src={movie.poster_path} alt={movie.original_title} />
              <p>{movie.original_title}</p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
