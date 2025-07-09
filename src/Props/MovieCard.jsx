import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="movie-1"
      onClick={() =>
        navigate(`/movies/${movie.movie_id}`, { state: movie })
      }
    >
      {!loaded && <div className="skeleton" />}
      <img
        src={movie.poster_path}
        alt={movie.original_title}
        onLoad={() => setLoaded(true)}
        style={{ display: loaded ? "block" : "none" }}
      />
      <p>{movie.original_title}</p>
    </div>
  );
}
