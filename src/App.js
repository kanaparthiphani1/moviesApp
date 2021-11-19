import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'
import './App.css'
import Signin from './components/Signin'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/" component={Home} />
      </Switch>
    )
  }
}

export default App
