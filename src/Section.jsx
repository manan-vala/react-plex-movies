import { useEffect, useState } from "react";
import axios from "axios";
import "./Section.css";
import MovieCard from "./Props/MovieCard";
import { useNavigate, useOutletContext } from "react-router-dom";

const url = "https://jsonfakery.com/movies/paginated";

export default function Section() {
  const { searchQuery } = useOutletContext();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        setMovies(res.data.data);
      } catch {}
    })();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.original_title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="section">
      <div className="section-content">
        <h1>Movies</h1>
        <div className="movie-content">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
