import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./MovieDetails.css";
import { useLocation, useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const location = useLocation();
  const movie = location.state;

  //filtering on cast-image loading error
  const [validCast, setValidCast] = useState(movie.casts);

  const handleImgError = (id) => {
    setValidCast((prev) => prev.filter((cast) => cast.id !== id));
  };

  return (
    <div
      className="movie-details background-overlay"
      style={{ "--bg-url": `url(${movie.backdrop_path})` }}
    >
      <div className="md-content">
        <img
          src={movie.poster_path}
          alt={movie.original_title}
          className="poster"
        />
        <div className="md-content-txt">
          <h1>{movie.original_title}</h1>
          <div className="data">
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "#ff0000" }}
              className="icon"
            />
            <p>{movie.vote_average}</p>
            <button>{new Date(movie.release_date).getFullYear()}</button>
          </div>
          <p className="movie-overview">{movie.overview}</p>
        </div>
      </div>
      <h1 className="cast-heading">Cast</h1>
      <div className="movie-cast">
        {validCast.map((cast) => (
          <div className="box" key={cast.id}>
            <img
              src={cast.profile_path}
              onError={() => handleImgError(cast.id)}
            />
            <div className="name">{cast.original_name}</div>
          </div>
        ))}

        {/* <div className="box">
          <img
            src="https://image.tmdb.org/t/p/original/z4IbPBVF4GHJq7IWdLQg71zRcyd.jpg"
          />
          <div className="name">Yancy Butler</div>
        </div>
        <div className="box">
          <div
            className="cast-img"
            style={{
              "--bg-url": `url(https://image.tmdb.org/t/p/original/z4IbPBVF4GHJq7IWdLQg71zRcyd.jpg)`,
            }}
          />
          <div className="name">Yancy Butler</div>
        </div> */}
      </div>
    </div>
  );
}

export default MovieDetails;
