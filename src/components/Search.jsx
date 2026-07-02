import React from 'react';

export class Search extends React.Component {
  state = {
    search: '',
    type : 'all'
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(() => ({type : event.target.dataset.type}), () =>{
      this.props.searchMovies(this.state.search, this.state.type)
    })
  }

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="search"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(event) => this.setState({ search: event.target.value })}
            onKeyDown={this.handleKeyDown}
          />
          <button
            className="btn search-btn"
            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
          >
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type='all'
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span style={{paddingLeft : '28px'}}>All</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              data-type='movie'
              onChange={this.handleFilter}
              type="radio"
              checked={this.state.type === 'movie'}
            />
            <span style={{paddingLeft : '28px'}}>movie</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type='series'
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span style={{paddingLeft : '28px'}}>series</span>
          </label>
        </div>
      </div>
    );
  }
}
