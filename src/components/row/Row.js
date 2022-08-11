import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
//import classes from './Row.module.css';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original"

//destructured props
function Row({ title, fetchUrl, isLargeRow }) {

    //initial state for movies
    const [movies, setMovies] = useState([]);

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

    console.log(movies);

    return (
      <div className="row">
           <h2>{title}</h2>

          <div className="row_posters">
            {movies.map(movie => {
              return <img
                key={movie.id}
                
                className={`row_poster ${isLargeRow && "row_posterLarge"}`} /* triple brackets for an interpolated expression */
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name} />
            })}
          </div>
      </div>
    );
}

export default Row;