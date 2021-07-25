import { Component } from 'react';
import qs from 'query-string';
import MoviesList from '../../components/MoviesList/MoviesList';
import Api from '../../apiServices';
import SearchBar from '../SearchBar/SearchBar';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
    poster_path: '',
  };
  componentDidMount() {
    const { query } = this.getQueryFromProps(this.props);

    if (query) {
      this.setState({ searchQuery: query });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (searchQuery !== prevState.searchQuery) {
      this.fetchMovies();
      this.props.history.push({
        search: `query=${searchQuery}`,
      });
    }
  }
  fetchMovies() {
    const { searchQuery } = this.state;
    Api.fetchMoviesSearchQuery(searchQuery).then(response =>
      this.setState({
        movies: response,
        poster_path: `https://image.tmdb.org/t/p/w500${response.poster_path}`,
      }),
    );
  }

  getQueryFromProps = props => {
    return qs.parse(props.location.search);
  };

  handleSubmit = query => {
    this.setState({
      searchQuery: query,
    });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesPage;
