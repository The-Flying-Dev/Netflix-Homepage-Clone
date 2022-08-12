import axios from 'axios';

/** base url to make request to the themoviedatabase */

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
});


// instance.get('/movie'), appends to end of the baseURL; => https://api.themoviedb.org/3/movie
// React pattern for making multiple requests


export default instance;
