import React from 'react';

import classes from './App.module.css';
import requests from './requests';

import Banner from './components/banner/Banner';
import Nav from './components/nav/Nav';
import Row from './components/row/Row';


function App() {
    return (
        <div className={classes.app}>
            <Banner />
            <Nav />
            <Row title="Netflix Originals" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
  );
}

export default App;

