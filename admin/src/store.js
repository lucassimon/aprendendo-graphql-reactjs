import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { reducers as authReducers, sagas as authSagas } from './containers/Auth'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const routeMiddleware = routerMiddleware(history)

const rootReducer = combineReducers({
  auth: authReducers.auth,
  loginForm: authReducers.loginForm, 
  logout: authReducers.logout,
  profile: authReducers.profile,
  route: routerReducer
})

const sagaMiddleware = createSagaMiddleware()

const myLogger = (store) => (next) => (action) => {
  next(action)
}

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      myLogger,
      routeMiddleware,
      sagaMiddleware
    )
  )
)

function* rootSaga() {
  yield [
    authSagas()
  ]
}

sagaMiddleware.run(rootSaga)

export { store, history }
