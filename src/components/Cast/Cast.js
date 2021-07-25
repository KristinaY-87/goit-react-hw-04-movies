import { Component } from 'react';
import Api from '../../apiServices';
import defaultImg from './default.jpg';

class Cast extends Component {
  state = {
    baseUrl: 'https://image.tmdb.org/t/p/w500',
    casts: [],
  };

  componentDidMount() {
    const { id } = this.props;
    Api.fetchCast(id).then(response =>
      this.setState({
        casts: response,
      }),
    );
  }

  render() {
    const { casts, baseUrl } = this.state;

    return (
      <ul>
        {casts.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            {
              <img
                src={profile_path ? baseUrl + profile_path : defaultImg}
                alt={name}
                width="150"
              />
            }
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
