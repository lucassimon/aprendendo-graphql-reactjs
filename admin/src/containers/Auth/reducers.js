import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  LOGIN_SET_EMAIL,
  LOGIN_SET_PASSWORD,
  LOGIN_CLEAR_FORM,
  LOGIN_START,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  LOGGEDIN_PROFILE_START,
  LOGGEDIN_PROFILE_ERROR,
  LOGGEDIN_PROFILE_SUCCESS,
  SET_PROFILE_LOGGED_IN

} from './actions'

const authState = {
  token: '',
  refresh: '',
  authenticated: false
}

const auth = (state = authState, action) => {

  switch (action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        refresh: action.payload.refresh,
        authenticated: true
      }
    case CLEAR_AUTH: {
      return {
        ...state,
        token: '',
        refresh: '',
        authenticated: false
      }
    }
    default:
      return state
  }
}

const loginState = {
  email: { value: '' },
  password: { value: '' },
  loading: false,
  error: false,
  errors: null,
}

const loginForm = (state = loginState, action) => {
  switch (action.type) {
    case LOGIN_SET_EMAIL: {
      return {
        ...state,
        email: Object.assign({}, { value: action.payload})
      }
    }

    case LOGIN_SET_PASSWORD: {
      return {
        ...state,
        password: Object.assign({}, { value: action.payload})
      }
    }

    case LOGIN_CLEAR_FORM: {
      return loginState
    }

    case LOGIN_START: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        errors: action.payload
      }
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        errors: null
      }
    }

    default: {
      return state;
    }

  }

}

export const logoutState = {
  loading: false,
  error: false,
  errors: null
}

const logout  = (state = logoutState, action) => {
  switch (action.type) {

    case LOGOUT_START: {
      return {
        ...state,
        loading: true
      }
    }

    case LOGOUT_SUCCESS: {
      return Object.assign({}, state, {
        loading: false
      })
    }

    case LOGOUT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        errors: action.payload
      }
    }

    default: {
      return state
    }
  }
}

const profileState = {
  user: {},
  permissions: {
    admin: false,
    active: false
  },
  loading: false,
  error: false,
  errors: null
}

const profile = (state = profileState, action) => {
  switch (action.type) {

    case LOGGEDIN_PROFILE_START: {
      return Object.assign({}, state, {
        loading: true
      })
    }

    case LOGGEDIN_PROFILE_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: true,
        errors: action.payload
      })
    }

    case LOGGEDIN_PROFILE_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        error: false,
        errors: null
      })
    }

    case SET_PROFILE_LOGGED_IN: {
      return Object.assign({}, state, {
        loading: false,
        error: false,
        errors: null,
        user: action.payload,
        permissions: action.payload.permissions
      })
    }

    default: {
      return state
    }
  }
}

export default { auth, loginForm, logout, profile }
