import {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const settings = {
  dots: false,
  slidesToShow: 6,
  slidesToScroll: 1,
}

class MovieSlider extends Component {
  render() {
    const {moviesList} = this.props
    return (
      <>
        <Slider {...settings}>
          {moviesList.map(eachMovie => (
            <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
          ))}
        </Slider>
      </>
    )
  }
}

export default MovieSlider
