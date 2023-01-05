import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';

export default class Searchbar extends Component {
  state = {
    searchImage: '',
  };

  handleImageChange = event => {
    this.setState({ searchImage: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchImage.trim() === '') {
      return alert('Please, enter image name.');
    }

    this.props.onSubmit(this.state.searchImage);

    this.setState({ searchImage: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <h1 className="visually-hidden">images gallery</h1>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <label htmlFor="searchInput"></label>
          <input
            id="searchInput"
            type="text"
            name="image"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchImage}
            className="SearchForm-input"
            onChange={this.handleImageChange}
          ></input>
          <button type="submit" className="SearchForm-button">
            <FcSearch size={30} />
            <span className="SearchForm-buttonLabel">Search</span>
          </button>
        </form>
      </header>
    );
  }
}