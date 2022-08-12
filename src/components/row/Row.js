import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import axios from '../../api/axios';

import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original"

//destructured props
function Row({ title, fetchUrl, isLargeRow }) {

    //initial state for movies
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // (1) get the data using the api
    // (2) populate the movies array with data using the setMovies setter function from useState
    // (3) the fetchUrl is the dependency for this useEffect due to it coming from outside the function, so it must be placed inside array

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl); // (1)
            setMovies(request.data.results); // (2)
            return request;
        }
        fetchData();
    }, [fetchUrl]);  // (3)

    //console.log(movies);

    const opts = {
        height: "390",
        width: "99%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            //origin: 'http://localhost:3000',
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
          movieTrailer(movie?.title || movie?.name || movie?.original_title || "")
              .then(url => {
                  const urlParams = new URLSearchParams(new URL(url).search);
                  setTrailerUrl(urlParams.get('v'));                  
              }).catch((error) => console.log(error))
        }
    };

    return (
      <div className="row">
           <h2>{title}</h2>

          <div className="row_posters">
            {movies.map(movie => {
              return <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name} />
            })}
          </div>
          <div style={{ padding: "40px"}}>
              {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          </div>
      </div>
    );
}

export default Row;