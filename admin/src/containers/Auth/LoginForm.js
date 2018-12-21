import React from 'react'
import { connect } from 'react-redux'
import { setLoginEmail, setLoginPassword, submitLoginForm } from './actions'
import classNames from 'classnames'

const LoginForm = (props) => {

  const btnLoginClass = classNames({
    'button is-primary is-large': true,
    'is-loading': props.loginForm.loading
  });

  return (
    <form onSubmit={props.onFormSubmit}>
      { props.loginForm.error &&
      <div className="notification is-danger">
          {props.loginForm.errors}
      </div>
      }
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="email"
            name="email"
            value={props.loginForm.email.value}
            placeholder="Your Email"
            required
            onChange={props.onEmailChange}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input
            className="input"
            type="password"
            name="password"
            value={props.loginForm.password.value}
            placeholder="Your Password"
            onChange={props.onPasswordChange}
          />
        </div>
      </div>
      <button className={btnLoginClass} value="Login"> Login </button>
    </form>
  )
}


const mapStateToProps = (state) => ({
  loginForm: state.loginForm
})

const mapDispatchToProps = (dispatch) => ({
  onEmailChange(e) { dispatch(setLoginEmail(e.target.value)) },
  onPasswordChange(e) { dispatch(setLoginPassword(e.target.value)) },
  onFormSubmit(e) {
    e.preventDefault()
    dispatch(submitLoginForm())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

