import React, {Component} from 'react';

class Movie extends Component {
  render(){
    return (
      <div className="movie">
      <ul>
      <a className="movie-link" href={this.props.url}><h2 className="movie-title">{this.props.name}</h2></a>
      </ul>
      </div>
    )
  }
}

export default Movie;
