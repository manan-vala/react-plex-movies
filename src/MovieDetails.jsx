import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./MovieDetails.css";
import { useLocation, useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const location = useLocation();
  const movie = location.state;

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
      <div className="movie-cast">
        {movie.casts.map((cast) => (
          <div className="box" key={cast.id}>
            <div
              className="cast-img"
              style={{ "--bg-url": `url(${cast.profile_path})` }}
            />
            <div className="name">{cast.original_name}</div>
          </div>
        ))}

        {/* <div className="box">
          <div
            className="cast-img"
            style={{
              "--bg-url": `url(https://image.tmdb.org/t/p/original/z4IbPBVF4GHJq7IWdLQg71zRcyd.jpg)`,
            }}
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
        </div>
        <div className="box">
          <div
            className="cast-img"
            style={{
              "--bg-url": `url(https://image.tmdb.org/t/p/original/z4IbPBVF4GHJq7IWdLQg71zRcyd.jpg)`,
            }}
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
        </div>
        <div className="box">
          <div
            className="cast-img"
            style={{
              "--bg-url": `url(https://image.tmdb.org/t/p/original/z4IbPBVF4GHJq7IWdLQg71zRcyd.jpg)`,
            }}
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
        </div>
        <div className="box">
          <div
            className="cast-img"
            style={{
              "--bg-url": `url(https://image.tmdb.org/t/p/original/z4IbPBVF4GHJq7IWdLQg71zRcyd.jpg)`,
            }}
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
        </div>
        <div className="box">
          <div
            className="cast-img"
            style={{
              "--bg-url": `url(https://image.tmdb.org/t/p/original/z4IbPBVF4GHJq7IWdLQg71zRcyd.jpg)`,
            }}
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
        </div>
        <div className="box">
          <div
            className="cast-img"
            style={{
              "--bg-url": `url(https://image.tmdb.org/t/p/original/z4IbPBVF4GHJq7IWdLQg71zRcyd.jpg)`,
            }}
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
      {/* <h1>{movie.original_title}</h1>
      <img src={movie.backdrop_path} alt={movie.original_title} />
      <p>{movie.overview}</p>
      <p>Language: {movie.original_language}</p>
      <p>Popularity: {movie.popularity}</p>
      <p>Vote Average: {movie.vote_average}</p>
      <p>Vote Count: {movie.vote_count}</p>
      <h2>Cast:</h2>
      <ul>
        {movie.casts.map((cast) => (
          <li key={cast.id}>
            <img
              src={cast.profile_path}
              alt={cast.name}
              style={{ width: "50px", height: "auto" }}
            />
            <span>
              {cast.name} as {cast.character}
            </span>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default MovieDetails;
