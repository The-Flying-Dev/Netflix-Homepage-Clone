import React, { useState, useEffect } from 'react'
import axios from '../../api/axios';
import classes from './Row.module.css';

//const base_url = "https://image.tmdb.org/t/p/original"

const Row = ({ title, fetchUrl }) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
      <div>{title}</div>
    );
}

export default Row;