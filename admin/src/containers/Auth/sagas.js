import config from '../../services/config'
import axios from 'axios'
import { takeLatest, select, call, put } from 'redux-saga/effects'
import {
  LOGIN_SUBMIT_FORM,
  loginStart,
  loginError,
  loginSuccess,
  setAuthToken,
  clearLoginForm,
  LOGOUT_START,
  logoutSuccess,
  logoutError,
  clearAuth,
  loggedInStart,
  loggedInError,
  loggedInSuccess,
  setProfileLoggedIn
} from './actions'
import { history } from '../../store'
import { push } from 'react-router-redux'


function* loginFlow() {
  // TODO: check if not in process (maybe loading visible).
  const loginForm = yield select((state) => state.loginForm);
  // get the state data
  const payload = {}
  payload.email = loginForm.email.value
  payload.password = loginForm.password.value

  let url = `${config[process.env.NODE_ENV].base}/auth/`

  yield put(loginStart())
  let response = {}
  try {
    response = yield call(axios.post, url, payload)
  } catch (error) {
    const { data } = error.response
    yield put(loginError(data.message || 'Contact the administrator.'))
    return yield false
  }

  yield put(loginSuccess())

  const authResp = response.data

  if (!authResp && !authResp.token && !authResp.refresh) {
    yield put(loginError('Do not receive the access from server.'))
    return yield false
  }

  const { token, refresh } = authResp
  
  const jwts = { token: token, refresh: refresh }

  yield put(setAuthToken(jwts))

  // TODO: Clear login from
  yield put(clearLoginForm())
  // TODO: Save in Local Storage
  const serializedState = JSON.stringify(jwts)
  localStorage.setItem('admin-commissioning', serializedState)
  
  url = `${config[process.env.NODE_ENV].base}/auth/me/`
  const headers = {
    'Authorization': `Bearer ${token}`
  }
  yield put(loggedInStart())
  try {
    response = yield call(axios.get, url, {headers: headers})
  } catch (error) {
    const { data } = error.response
    yield put(loginError(data.message || 'Contact the administrator.'))
    yield put(loggedInError(data.message || 'Contact the administrator.'))
    return yield false
  }

  yield put(loggedInSuccess())
  
  const { data } = response.data

  yield put(setProfileLoggedIn(data))

  yield put(push('/dashboard/'))
  
  return yield false
}

function* logoutFlow() {
  try {
    // yield put(unsetUser());
    localStorage.removeItem('admin-commissioning')
    yield put(logoutSuccess())
    yield put(clearAuth())
    yield call(history.push, '/login')
  } catch (error) {
    yield put(logoutError(error))
  }
  
  return yield false
}


export default function* authRootSaga() {
  yield [
    takeLatest(LOGIN_SUBMIT_FORM, loginFlow),
    takeLatest(LOGOUT_START, logoutFlow),
  ];
}
