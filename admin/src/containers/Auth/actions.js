export const SET_AUTH_TOKEN = 'Auth/SET_AUTH_TOKEN'
export const setAuthToken = (jwts) => ({ type: SET_AUTH_TOKEN, payload: jwts })
export const CLEAR_AUTH = 'Auth/CLEAR_AUTH'
export const clearAuth = () => ({ type: CLEAR_AUTH })

// Login & Login Form

export const LOGIN_START = 'Auth/LOGIN_START'
export const loginStart = () => ({ type: LOGIN_START })
export const LOGIN_SUCCESS = 'Auth/LOGIN_SUCCESS'
export const loginSuccess = () => ({ type: LOGIN_SUCCESS })
export const LOGIN_ERROR = 'Auth/LOGIN_ERROR'
export const loginError = (error) => ({ type: LOGIN_ERROR, payload: error });
export const LOGIN_SET_EMAIL = 'Auth/LOGIN_SET_EMAIL'
export const setLoginEmail = (email) => ({ type: LOGIN_SET_EMAIL, payload: email });
export const LOGIN_SET_PASSWORD = 'Auth/LOGIN_SET_PASSWORD'
export const setLoginPassword = (password) => ({ type: LOGIN_SET_PASSWORD, payload: password });
export const LOGIN_SUBMIT_FORM = 'Auth/LOGIN_SUBMIT_FORM'
export const submitLoginForm = () => ({ type: LOGIN_SUBMIT_FORM })
export const LOGIN_CLEAR_FORM = 'Auth/LOGIN_CLEAR_FORM'
export const clearLoginForm = () => ({ type: LOGIN_CLEAR_FORM })

// JWT
export const SAVE_JWT_LOCAL_STORAGE = 'Auth/SAVE_JWT_LOCAL_STORAGE'
export const saveJWTLocalStorage = () => ({ type: SAVE_JWT_LOCAL_STORAGE })

// Profile
export const LOGGEDIN_PROFILE_START = 'Auth/LOGGEDIN_PROFILE_START'
export const loggedInStart = () => ({ type: LOGGEDIN_PROFILE_START })
export const LOGGEDIN_PROFILE_ERROR = 'Auth/LOGGEDIN_PROFILE_ERROR'
export const loggedInError = () => ({ type: LOGGEDIN_PROFILE_ERROR })
export const LOGGEDIN_PROFILE_SUCCESS = 'Auth/LOGGEDIN_PROFILE_SUCCESS'
export const loggedInSuccess = () => ({ type: LOGGEDIN_PROFILE_SUCCESS })

export const SET_PROFILE_LOGGED_IN = 'Auth/SET_PROFILE_LOGGED_IN'
export const setProfileLoggedIn = (profile) => ({ type: SET_PROFILE_LOGGED_IN, payload: profile })

// Permissions

// Logout
export const LOGOUT_START = 'Auth/LOGOUT_START'
export const logoutStart = () => ({ type: LOGOUT_START })
export const LOGOUT_SUCCESS = 'Auth/LOGOUT_SUCCESS'
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS })
export const LOGOUT_ERROR = 'Auth/LOGOUT_ERROR'
export const logoutError = (error) => ({ type: LOGOUT_ERROR, payload: error });
