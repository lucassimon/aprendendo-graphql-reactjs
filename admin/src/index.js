import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { store, history } from './store'
import { ConnectedRouter } from 'react-router-redux'

ReactDOM.render((
    <Provider store={store} >
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
    ), document.getElementById('root')
);
registerServiceWorker();
