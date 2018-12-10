import React, {Component} from 'react';
import Movie from './Movie.js';

class MovieList extends Component {
  render(){
    const movieNodes = this.props.data.map((movie) => {
      return <Movie key={movie.id} name={movie.name} url={movie.url}/>
    });

    return (
      <div className="movie-list">
      {movieNodes}
      </div>
    )
  }
}

export default MovieList;
