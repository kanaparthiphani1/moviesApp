import styled from 'styled-components'

export const SignInCont = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-size: cover;
  background: linear-gradient(
      116.64deg,
      rgba(0, 0, 0, 0.8) 0.46%,
      rgba(0, 0, 0, 0) 100%
    ),
    url('https://res.cloudinary.com/dbfoeqkyr/image/upload/v1637143962/MoviesApp/netfilx_1_ajpkz6.png');
`

export const Header = styled.img`
  margin-top: 48px;
  width: 180px;
  height: 52px;
  margin-left: 165px;
`

export const SignInOuter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
  margin: 0px;
`

export const SignIn = styled.div`
  width: 456px;
  height: 440px;
  border-radius: 8px;
  background: #0c0b10;
  opacity: 0.8;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`

export const FormHeading = styled.h1`
  width: 96px;
  height: 40px;
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`
export const Label = styled.label`
  align-self: flex-start;
  width: 65px;
  height: 16px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  margin-top: 20px;
  margin-bottom: 8px;
  /* identical to box height, or 133% */

  letter-spacing: 0.01em;
  text-transform: uppercase;

  color: #ffffff;
`

export const Input = styled.input`
  height: 40px;
  align-self: flex-start;
  background: #333333;
  border-radius: 2px;
  width: 100%;
  border: 0px;
  padding: 10px;
  color: white;
`
export const Button = styled.button`
  background: #e50914;
  border-radius: 4px;
  height: 40px;
  padding: 8px 20px;
  color: #ffffff;
  border: 0px;
  margin-top: 40px;
`
export const Comment = styled.p`
  width: 239px;
  height: 18px;

  font-family: HK Grotesk;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  /* Light / orange / 400 */

  color: #fb923c;
`
