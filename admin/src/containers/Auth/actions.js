export const SET_USER = 'Auth/SET_USER'
export const UNSET_USER = 'Auth/UNSET_USER'
export const SET_NAME = 'Auth/SET_NAME'
export const SET_EMAIL = 'Auth/SET_EMAIL'
export const SET_PASSWORD = 'Auth/SET_PASSWORD'
export const SET_PASSWORD_CONFIRM = 'Auth/SET_PASSWORD_CONFIRM'
export const SUBMIT_SIGNUP_FORM = 'Auth/SUBMIT_SIGNUP_FORM'
export const SUBMIT_LOGIN_FORM = 'Auth/SUBMIT_LOGIN_FORM'
export const CLEAR_AUTH_FORM = 'Auth/CLEAR_AUTH_FORM'

// SignUp & Login.
export const setName = (name) => ({ type: SET_NAME, payload: name })
export const setEmail = (email) => ({ type: SET_EMAIL, payload: email })
export const setPassword = (password) => ({ type: SET_PASSWORD, payload: password })
export const setPasswordConfirm = (password) => ({ type: SET_PASSWORD_CONFIRM, payload: password })
export const submitSignUpForm = () => ({ type: SUBMIT_SIGNUP_FORM })
export const submitLoginForm = () => ({ type: SUBMIT_LOGIN_FORM })
export const clearAuthForm = () => ({ type: CLEAR_AUTH_FORM })

