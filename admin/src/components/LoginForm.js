import React from 'react'

const LoginForm = () => {
  return (
    <form>
      <div className="field">
        <div className="control">
          <input className="input is-large" type="email" placeholder="Your Email" autofocus="" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input is-large" type="password" placeholder="Your Password" />
        </div>
      </div>
      <div className="field">
        <label className="checkbox">
          <input type="checkbox" />
          Remember me
        </label>
      </div>
      <a className="button is-block is-primary is-alt">Login</a>
    </form>
  )
}


export default LoginForm
