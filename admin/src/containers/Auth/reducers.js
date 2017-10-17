import {
  SET_USER,
  UNSET_USER,
  SET_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_PASSWORD_CONFIRM,
  CLEAR_AUTH_FORM
} from './actions'

const authState = {
  jwt: '',
  refresh: '',
  authenticated: false
}

const auth = (state = authState, action) => {

  switch (action.type) {
    case SET_USER:
      console.log(state, action.payload)
      return { ...state, user: action.payload, redirect: false }
    case UNSET_USER:
      console.log(state, action.payload)
      break;
    default:
      return state
  }
}

const login = (state, action) => {

  switch (action.type) {
    

  }
}

const logout = (state, action) => {
  switch (action.type) {
    
  }
}

export default { auth }
