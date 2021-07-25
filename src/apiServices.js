import axios from 'axios';

const KEY = '2690a15d8abf52b4f7c30542acc1f92f';
const Api = {
  fetchPopularMovies() {
    return axios
      .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`)
      .then(r => r.data.results);
  },
  fetchMoviesSearchQuery(query) {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${KEY}&language=en-US&page=1&include_adult=false`,
      )
      .then(response => response.data.results);
  },
  fetchMoviesDetails(movieId) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`,
      )
      .then(response => response.data);
  },
  fetchCast(id) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`,
      )
      .then(response => response.data.cast);
  },
  fetchMoviesReview(id) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`,
      )
      .then(response => response.data.results);
  },
};

export default Api;
