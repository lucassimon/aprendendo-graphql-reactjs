import React, { Component } from 'react';

import './statics/css/bulma.css';
import Header from './components/Header'
import Main from './containers/Main'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
