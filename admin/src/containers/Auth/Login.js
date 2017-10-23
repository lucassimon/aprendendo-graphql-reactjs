import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

import LoginForm from './LoginForm'

class Login extends Component {

  constructor(props) {
    super(props)

    this.componentClicked = this.componentClicked.bind(this)
    this.responseFacebook = this.responseFacebook.bind(this)
    this.redirectFacebookDialog = this.redirectFacebookDialog.bind(this)
  }

  componentClicked() {
    console.log('cliquei aqui')
  }

  responseFacebook(response) {
    console.log(response)
  }

  redirectFacebookDialog() {
    window.location = "http://localhost:5000/auth/oauth_redirect/facebook"
  }


  render() {
    return (
      <section className="hero is-fullheight is-light">
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h3 className="title has-text-grey">Login</h3>
                <p className="subtitle has-text-grey">Please login to proceed.</p>
                <div className="box">
                  <figure className="avatar">
                    <img src="https://placehold.it/128x128" alt="Profile avatar" />
                  </figure>
                  <LoginForm />
                </div>
                <p>
                  <a className="button is-block is-info is-alt" onClick={this.redirectFacebookDialog}>
                    Login with Facebook
                  </a>
                </p>
                <p className="has-text-grey">
                  <NavLink
                    to='/'
                    exact
                    className="">
                       Home
                  </NavLink> &nbsp;·&nbsp;
                  <NavLink
                    to='/register'
                    exact
                    className="">
                       Register
                  </NavLink> &nbsp;·&nbsp;
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default Login
