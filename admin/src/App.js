import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import './statics/css/bulma.css';

import Index from './containers/Index'
import Main from './containers/Main'
import Login from './containers/Login'
import Register from './containers/Register'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Index} /> {/* Note-1 */}
        <Route exact path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/dashboard' component={Main} />
      </Switch>
    );
  }
}

export default App;

