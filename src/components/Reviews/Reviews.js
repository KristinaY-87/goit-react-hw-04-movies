// import axios from "axios";
import { Component } from 'react';
import Api from '../../apiServices';
// const KEY = '2690a15d8abf52b4f7c30542acc1f92f';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  // async componentDidMount() {
  //     console.log(this.props);
  //     const { id } = this.props;

  //     const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}`)
  //     console.log(response.data.results)
  //     console.log(...response.data.results)

  //     this.setState({
  //         reviews: response.data.results
  //     })
  // }

  componentDidMount() {
    const { id } = this.props;
    Api.fetchMoviesReview(id).then(response =>
      this.setState({
        reviews: response,
      }),
    );
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews && reviews.length > 0
          ? reviews.map(({ id, content, author, url }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content.slice(0, 500)}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  ReadMore
                </a>
              </li>
            ))
          : 'No information'}
      </ul>
    );
  }
}

export default Reviews;
