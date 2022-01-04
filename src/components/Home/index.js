import {Component} from 'react'
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import MovieSlider from '../MovieSlider'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  HomeCont,
  Header,
  Logo,
  VideoCont,
  VideoPlayer,
  BottomGradient,
  MovieInfo,
  MovieName,
  MovieOverView,
  AudioAndMovieAgeCont,
  AudioLogo,
  AgeTape,
  AudioOff,
  TrendingMoviesCont,
  TrendinhMovieHeader,
  BottomCont,
  TrendingMoviesInnerCont,
  ButtonCont,
  PlayButton,
  MoreInfo,
} from './styledComponents'

class Home extends Component {
  state = {
    moviesList: [],
    bannerMovie: null,
    videoUrl: '',
    mute: true,
    showDesc: true,
  }

  componentDidMount() {
    this.getAllMovies()
    setTimeout(() => {
      this.setState({showDesc: false})
    }, 4000)
  }

  getTrendingMovie = () => {
    const {moviesList} = this.state
    console.log(moviesList)

    const movieslen = moviesList.length
    console.log(movieslen)

    const randNum = Math.floor(Math.random() * movieslen)
    console.log(randNum)

    this.setState({bannerMovie: moviesList[randNum]}, this.loadBanner)
  }

  loadBanner = async () => {
    const {bannerMovie} = this.state
    console.log(bannerMovie)

    if (bannerMovie !== null) {
      const {id} = bannerMovie
      console.log('banner Moviue : ', bannerMovie)

      const apiUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=8007be39b9ab7f790a87e124f8d0666f&language=en-US`
      const options = {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }
      const response = await fetch(apiUrl, options)
      let jsonRe = null
      if (response.ok) {
        jsonRe = await response.json()
        const {results} = jsonRe
        console.log(results)

        const banner = results.filter(
          eachData =>
            eachData.name.includes('Trailer') &&
            eachData.site.includes('YouTube'),
        )
        const bannerFinal = banner[0]
        const url = `https://youtu.be/${bannerFinal.key}`
        this.setState({videoUrl: url})
      }
    }
  }

  getAllMovies = async () => {
    const url =
      'https://api.themoviedb.org/3/trending/all/week?api_key=8007be39b9ab7f790a87e124f8d0666f'
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    }
    const response = await fetch(url, options)
    let jsonRe = null
    if (response.ok) {
      jsonRe = await response.json()
      console.log(jsonRe)
      this.setState({moviesList: jsonRe.results}, this.getTrendingMovie)
    }
    console.log('Response : ', jsonRe)
  }

  audioToggle = () => {
    const {mute} = this.state
    this.setState({mute: !mute})
  }

  render() {
    const {videoUrl, bannerMovie, mute, showDesc, moviesList} = this.state
    console.log(videoUrl)
    return (
      <HomeCont>
        <Header>
          <Logo src="https://res.cloudinary.com/dbfoeqkyr/image/upload/v1637144362/MoviesApp/heading_v8ebch.png" />
        </Header>
        <VideoCont>
          <VideoPlayer
            url={videoUrl}
            playing
            loop
            playsinline
            muted={mute}
            config={{
              youtube: {
                playerVars: {showinfo: 1},
              },
            }}
          />
          <MovieInfo>
            {bannerMovie !== null && <MovieName>{bannerMovie.title}</MovieName>}
            <ButtonCont>
              <PlayButton>
                <FaPlay style={{marginRight: '5px'}} />
                Play
              </PlayButton>
              <MoreInfo>
                <AiOutlineInfoCircle style={{marginRight: '5px'}} />
                More Info
              </MoreInfo>
            </ButtonCont>
          </MovieInfo>
          <AudioAndMovieAgeCont>
            {!mute ? (
              <AudioLogo onClick={this.audioToggle} />
            ) : (
              <AudioOff onClick={this.audioToggle} />
            )}
            {bannerMovie !== null && (
              <AgeTape>{bannerMovie.adult ? '18+' : '14+'}</AgeTape>
            )}
          </AudioAndMovieAgeCont>
        </VideoCont>
        <BottomGradient>.</BottomGradient>
        <BottomCont>
          <TrendingMoviesCont>
            <TrendinhMovieHeader>Trending Movies</TrendinhMovieHeader>

            <MovieSlider moviesList={moviesList} />
          </TrendingMoviesCont>
        </BottomCont>
      </HomeCont>
    )
  }
}
export default Home
