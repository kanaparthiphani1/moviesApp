import styled from 'styled-components'
import ReactPlayer from 'react-player'
import {HiVolumeUp, HiVolumeOff} from 'react-icons/hi'

export const HomeCont = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: black;
  z-index: -999;
`

export const Header = styled.div`
  position: absolute;
  height: 350px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 10%,
    transparent 90%
  );

  width: 100%;
  z-index: 1;
`
export const Logo = styled.img`
  opacity: 1;
  margin-top: 48px;
  width: 120px;
  height: 37px;
  margin-left: 165px;
  z-index: 1111;
`

export const VideoCont = styled.div`
  height: 90vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VideoPlayer = styled(ReactPlayer)`
  width: 140% !important;
  height: 3288px !important;
  position: relative;
  bottom: 1px;
`
export const BottomGradient = styled.div`
  height: 200px;
  width: 100%;
  background-image: linear-gradient(to top, black 10%, transparent 100%);
  position: relative;
  z-index: 1;
  bottom: 200px;
`
export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 40%;
  height: 200px;
  position: absolute;
  top: 400px;
  left: 70px;
  z-index: 999;
`
export const MovieName = styled.h1`
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 62px;
  color: #ffffff;
`
export const MovieOverView = styled.p`
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  animation: fadeRight 1s ease-out;
  color: #ffffff;
  animation-delay: 3s;
  @keyframes fadeRight {
    40% {
      position: relative;
      left: 1px;
      opacity: 80%;
    }

    50% {
      position: relative;
      left: 25px;
      opacity: 65%;
    }
    60% {
      position: relative;
      left: 40px;
      opacity: 50%;
    }
    70% {
      position: relative;
      left: 55px;
      opacity: 35%;
    }
    80% {
      position: relative;
      left: 70px;
      opacity: 20%;
    }
    90% {
      position: relative;
      left: 85px;
      opacity: 10%;
    }
    100% {
      position: relative;
      left: 100px;
      opacity: 0%;
    }
  }
`
export const AudioAndMovieAgeCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  height: 60px;
  position: absolute;
  top: 460px;
  right: 0px;
  z-index: 999;
`
export const AudioLogo = styled(HiVolumeUp)`
  color: white;
  padding: 7px;
  border: 0.5px solid white;
  border-radius: 50%;
  font-size: 46px;
`
export const AudioOff = styled(HiVolumeOff)`
  color: white;
  padding: 7px;
  border: 0.5px solid white;
  border-radius: 50%;
  font-size: 46px;
`

export const AgeTape = styled.div`
  width: 80%;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-left: 3px solid white;
  color: white;
  font-size: 15px;
  font-weight: 700;
`
export const BottomCont = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  padding-right: 40px;
  position: relative;
  bottom: 318px;
  z-index: 12121212;
`

export const TrendingMoviesCont = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const TrendinhMovieHeader = styled.h1`
  color: white;
  font-size: 23px;
  margin-bottom: 20px;
`
export const TrendingMoviesInnerCont = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 100%;
  z-index: 1111111;
`

export const ButtonCont = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  margin-top: 13px;
`
export const PlayButton = styled.button`
  border: 0px;
  padding: 10px;
  border-radius: 4px;
  background-color: white;
  width: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
`

export const MoreInfo = styled.button`
  border: 0px;
  padding: 10px;
  border-radius: 4px;
  background-color: grey;
  width: 115px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
`
