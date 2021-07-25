import axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=2690a15d8abf52b4f7c30542acc1f92f',
    );
    console.log(response.data.results);

    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;

    // console.log(this.props.match.url);
    return (
      <>
        {movies.length > 0 && (
          <ul className={styles.MoviesGallery}>
            {movies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default HomePage;
