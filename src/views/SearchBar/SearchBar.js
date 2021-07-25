import { Component } from 'react';
import styles from './SearchBar.module.css';
class SearchBar extends Component {
  state = {
    searchQuery: '',
    movies: [],
  };

  onInputChange = e => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    const { searchQuery } = this.state;

    this.props.onSubmit(searchQuery);
  };
  render() {
    const { searchQuery } = this.state;
    return (
      <form
        action="submit"
        className={styles.SearchForm}
        onSubmit={this.onFormSubmit}
      >
        <input
          className={styles.SearchFormInput}
          type="input"
          value={searchQuery}
          onChange={this.onInputChange}
          autocomplete="off"
          autofocus
          placeholder="Search movie"
        />
        <button className={styles.Button} type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
