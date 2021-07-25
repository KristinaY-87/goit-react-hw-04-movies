// import axios from "axios";
import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import routes from '../../routes';
import Api from '../../apiServices';
import styles from './MovieDetailsPage.module.css';

// const KEY = '2690a15d8abf52b4f7c30542acc1f92f';

class MoviesDetailsPage extends Component {
  state = {
    baseUrl: 'https://image.tmdb.org/t/p/w500/',
    genres: null,
    id: null,
    title: null,
    overview: null,
    vote_average: null,
    poster_path: '',
    castList: null,
    reviews: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    Api.fetchMoviesDetails(movieId).then(response =>
      // const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`)
      //   console.log(response.poster_path)

      this.setState({
        ...response,
        poster_path: `https://image.tmdb.org/t/p/w500${response.poster_path}`,
      }),
    );
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    // // 1 вариант старый
    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }
    // history.push(routes.home);

    // 2 вариант
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { title, poster_path, overview, vote_average, genres } = this.state;
    const { match } = this.props;
    // const movieId = Number(this.props.match.params);
    const movieId = match.params.movieId;
    console.log('history', this.props.history);
    console.log('location', this.props.location);

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>

        <div className={styles.block}>
          <img src={poster_path} alt={title} width="300"></img>

          <div className={styles.wrapper}>
            <h2>{title}</h2>
            <p>User score: {vote_average}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <ul className={styles.list}>
              <h4>Genres</h4>
              {genres?.map(({ id, name }) => (
                <li className={styles.item} key={id + name}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p>Information</p>
          <ul>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: this.props.location.state,
              }}
            >
              <li>Cast</li>
            </NavLink>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: this.props.location.state,
              }}
            >
              {/* {reviews.length > 0 (We don't have any reviews for this movie. */}
              <li>Reviews</li>
            </NavLink>
          </ul>

          <Route
            path={`${match.path}/cast`}
            render={() => <Cast id={movieId} />}
          />
          <Route
            path={`${match.path}/reviews`}
            render={() => <Reviews id={movieId} />}
          />
        </div>
      </>
    );
  }
}

export default MoviesDetailsPage;
