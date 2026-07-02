import React from "react";


export class Search extends React.Component{


    state = {
        search : '',
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            this.props.searchMovies(this.state.search);
        }
    };


    render(){
        return <div className="row">
        <div className="input-field">
          <input 
          placeholder="search" 
          type="search" 
          className="validate"
          value={this.state.search}
          onChange={(event) => this.setState({search : event.target.value})}
          onKeyDown={this.handleKeyDown}
          />
          <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
        </div>
      </div>
    }
}