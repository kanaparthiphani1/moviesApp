import {Component} from 'react'

class MovieItem extends Component {
  render() {
    const {movieDetails} = this.props
    return (
      <img
        style={{margin: '0px'}}
        src={`https://image.tmdb.org/t/p/w185${movieDetails.poster_path}`}
      />
    )
  }
}

export default MovieItem
