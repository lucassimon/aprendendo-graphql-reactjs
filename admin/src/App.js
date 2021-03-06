import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import './statics/css/bulma.css';

import Index from './containers/Index'
import Main from './containers/Main'
import Login from './containers/Auth/Login'
import Signup from './containers/Auth/Signup'
import OauthSuccess from './containers/OauthSuccess'
import NoMatch from './containers/NoMatch'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Index} /> {/* Note-1 */}
        <Route path='/login' component={Login} />
        <Route path='/register' component={Signup} />
        <Route path='/dashboard' component={Main} />
        <Route path='/oauth/ok' component={OauthSuccess} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default App;

