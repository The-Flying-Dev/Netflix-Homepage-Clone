import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import classes from './Row.module.css';
//import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original"

//destructured props
function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]); //fetchUrl is the dependency for this useEffect, so it must be placed inside array

    console.log(movies);

    return (
      <div className={classes.row}>
           <h2>{title}</h2>
      <div className={classes.row_posters}>
        {movies.map(movie => {
          return <img
            key={movie.id}
            
            className={`classes.row_poster ${{isLargeRow} && classes.row_posterLarge}`} /* triple brackets for an interpolated expression */
            src={`${base_url}${{isLargeRow} ? movie.backdrop_path : movie.poster_path }`}
            alt={movie.name} />
        })}
      </div>
      </div>
    );
}

export default Row;