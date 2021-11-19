import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  SignInCont,
  Header,
  SignInOuter,
  SignIn,
  Form,
  FormHeading,
  Label,
  Comment,
  Input,
  Button,
} from './styledComponents'

class Signin extends Component {
  state = {
    username: '',
    password: '',
    loginState: false,
    loginComment: '',
    requestToken: '',
  }

  componentDidMount() {
    this.getRequestToken()
  }

  getRequestToken = async () => {
    const url =
      'https://api.themoviedb.org/3/authentication/token/new?api_key=8007be39b9ab7f790a87e124f8d0666f'
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const jsonResp = await response.json()
      if (jsonResp.success) {
        this.setState({requestToken: jsonResp.request_token, login: true})
      }
    }
  }

  setUserName = event => {
    this.setState({username: event.target.value})
  }

  setPassword = event => {
    this.setState({password: event.target.value})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password, requestToken} = this.state
    const userDetails = {
      username,
      password,
      request_token: requestToken,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-type': 'application/json',
      },
    }
    console.log(options)

    const url =
      'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=8007be39b9ab7f790a87e124f8d0666f'
    const resposne = await fetch(url, options)
    if (resposne.ok) {
      const jsonResp = await resposne.json()
      if (jsonResp.success) {
        console.log('Login Success')

        this.goToHome(jsonResp)
      } else {
        this.setState({
          loginState: false,
          loginComment: jsonResp.status_message,
        })
      }
    } else {
      this.setState({loginState: false, loginComment: 'Server Unavailable'})
    }
  }

  goToHome = jsonResp => {
    const {history} = this.props
    const expireTime = new Date(jsonResp.expires_at)
    Cookies.set('requestToken', jsonResp.request_token, {
      expires: expireTime,
    })
    history.replace('/')
  }

  render() {
    const {username, password, loginComment, loginState} = this.state
    return (
      <SignInCont>
        <Header src="https://res.cloudinary.com/dbfoeqkyr/image/upload/v1637144362/MoviesApp/heading_v8ebch.png" />
        <SignInOuter>
          <SignIn>
            <Form onSubmit={this.onFormSubmit}>
              <FormHeading>Sign in</FormHeading>
              <Label>USERNAME</Label>
              <Input type="text" onChange={this.setUserName} value={username} />
              <Label>PASSWORD</Label>
              <Input
                type="password"
                onChange={this.setPassword}
                value={password}
              />
              {!loginState && <Comment>{loginComment}</Comment>}
              <Button type="submit">Sign In</Button>
            </Form>
          </SignIn>
        </SignInOuter>
      </SignInCont>
    )
  }
}

export default Signin
