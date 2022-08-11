import React, { useState, useEffect } from 'react'

import axios from '../../api/axios';
import requests from '../../requests';
import classes from './Banner.module.css';

const Banner = () => {

    const [movie, setMovie] = useState([]);

    //on page refresh display a new movie image
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1) //select random image from the array
                ]
            );
            return request;
        }
        fetchData();
    }, []);


    //truncates movie overview to the limit set for n
    //if the overview length is greater then truncate or return the original overview text
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className={classes.banner} 
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                  "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                  )`,
                backgroundPosition: "center center"
            }}
        >
            <div className={classes.banner_contents}>
                <h1 className={classes.banner_title}>
                    {movie?.title || movie?.name || movie?.original_name} {/* displays the title depending on the edge case */}
                </h1>

                <div className={classes.banner_buttons}>
                    <button className={classes.banner_button}>Play</button>
                    <button className={classes.banner_button}>My List</button>
                </div>

                {/*truncates movie overview to 150 characters */}
                <h1 className={classes.banner_description}>{truncate(movie?.overview, 150)}</h1>
            </div>

            <div className={classes.banner__fadeBottom} /> 

        </header>
    );
}

export default Banner;