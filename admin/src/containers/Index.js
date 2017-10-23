import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Index = ({ auth }) => (
  
  <section className="hero is-info is-fullheight">
    
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to='/'
              
              className='navbar-item'  
            >
              <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />
            </NavLink>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <NavLink
                to='/'
                
                className='navbar-item'
                activeClassName="is-active"
                >
                  Home
              </NavLink>
              {
                auth.authenticated ?
                <NavLink
                  to='/dashboard'
                  
                  className='navbar-item'
                  >
                    Dashboard
                </NavLink>
                :
                <NavLink
                  to='/login'
                  
                  className='navbar-item'
                  >
                    Login
                </NavLink>
                
              }
              { !auth.authenticated &&
                
                <NavLink
                  to='/register'
                  
                  className='navbar-item'
                  >
                    Register an account
                </NavLink>
              }
              <span className="navbar-item">
                <a className="button is-white is-outlined is-small" href="https://github.com/lucassimon/aprendendo-graphql-reactjs">
                  <span className="icon">
                    <i className="fa fa-github"></i>
                  </span>
                  <span>View Source</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h1 className="title">
            Coming Soon
          </h1>
          <h2 className="subtitle">
             Use the links above to view the dashboard
          </h2>
        </div>
      </div>
    </div>

  </section>
)


const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Index)
