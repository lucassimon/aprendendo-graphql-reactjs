import React from 'react';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutStart } from '../containers/Auth/actions'


const NavigationTop = ({ authenticated, profile, onLogoutUser }) => {
  
  return (
    <nav className="navbar is-dark">
      <div className="navbar-brand">
        <NavLink
            to='/'
            
            className="navbar-item">
          <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </NavLink>
        <div className="navbar-burger burger" data-target="navMenuColorsuccess-example">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenuColorsuccess-example" className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to='/dashboard'
            className="navbar-item"
            activeClassName=""
          >
            Dashboard
          </NavLink>
          <div className="navbar-item has-dropdown is-hoverable">
            <NavLink
              to='/dashboard/sellers'
              
              
              className="navbar-link"
              activeClassName="is-active"
            >
              Sellers
            </NavLink>
            <div className="navbar-dropdown">
              <NavLink
                to='/dashboard/sellers'
                
                
                className="navbar-item"
                activeClassName="is-active"
              >               
                Listar
              </NavLink>
              <NavLink
                to='/dashboard/sellers/add'
                
                
                className="navbar-item"
                activeClassName="is-active"
              >               
                Adicionar
              </NavLink>
              
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <NavLink
              to='/dashboard/products'
              
              
              className="navbar-link"
              activeClassName="is-active"
            >
              Products
            </NavLink>
            <div className="navbar-dropdown">
              <NavLink
                to='/dashboard/products'
              
                className="navbar-item"
                activeClassName="is-active"
              >               
                Listar
              </NavLink>
              <NavLink
                to='/dashboard/products/add'
      
                
                className="navbar-item"
                activeClassName="is-active"
              >               
                Adicionar
              </NavLink>
              
            </div>
          </div>
        </div>

        <div className="navbar-end">
          { profile &&
            <p className="navbar-item">
              Olá, { profile.full_name }
            </p>
          }
          <div className="navbar-item">
            <div className="field is-grouped">
              
              <p className="control">
                { authenticated && 
                <a
                  className="button is-primary"
                  onClick={onLogoutUser}
                >
                  <span className="icon">
                    <i className="fa fa-sign-out"></i>
                  </span>
                  <span>Logout</span>
                </a>
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  profile: state.profile.user
})

const mapDispatchToProps = (dispatch) => ({
  onLogoutUser() { dispatch(logoutStart()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTop);
