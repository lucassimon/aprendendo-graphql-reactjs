import React from 'react';
import {NavLink} from 'react-router-dom'


const NavigationTop = () => {
  return (
    <nav className="navbar is-dark">
      <div className="navbar-brand">
        <NavLink
            to='/'
            exact
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
            to='/dashboard/'
            exact
            strict
            className="navbar-item"
            activeClassName="is-active"
          >
            Dashboard
          </NavLink>
          <div className="navbar-item has-dropdown is-hoverable">
            <NavLink
              to='/dashboard/sellers/'
              exact
              strict
              className="navbar-link"
              activeClassName="is-active"
            >
              Sellers
            </NavLink>
            <div className="navbar-dropdown">
              <NavLink
                to='/dashboard/sellers/'
                exact
                strict
                className="navbar-item"
                activeClassName="is-active"
              >               
                Listar
              </NavLink>
              <NavLink
                to='/dashboard/sellers/add/'
                exact
                strict
                className="navbar-item"
                activeClassName="is-active"
              >               
                Adicionar
              </NavLink>
              
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <NavLink
              to='/dashboard/products/'
              exact
              strict
              className="navbar-link"
              activeClassName="is-active"
            >
              Products
            </NavLink>
            <div className="navbar-dropdown">
              <NavLink
                to='/dashboard/products/'
                exact
                strict
                className="navbar-item"
                activeClassName="is-active"
              >               
                Listar
              </NavLink>
              <NavLink
                to='/dashboard/products/add/'
                exact
                strict
                className="navbar-item"
                activeClassName="is-active"
              >               
                Adicionar
              </NavLink>
              
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
                  <span className="icon">
                    <i className="fa fa-sign-out"></i>
                  </span>
                  <span>Logout</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationTop
