import React from 'react';
import {NavLink} from 'react-router-dom'


const NavigationTop = () => {
  return (
    <nav className="nav has-shadow" aria-label="main navigation">
      <div className="container">

        <div className="nav-left">

          <NavLink
            to='/'
            exact
            className="nav-item">
              <img src="https://dansup.github.io/bulma-templates/images/bulma.png" alt="Description" />
          </NavLink>
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="nav-right nav-menu">
          <NavLink
            to='/dashboard/'
            exact
            strict
            className="nav-item is-tab"
            activeClassName="is-active"
          >
            Dashboard
          </NavLink>
          <NavLink
            to='/dashboard/users/'
            exact
            strict
            className="nav-item is-tab"
            activeClassName="is-active"
          >
            Users
          </NavLink>
          <NavLink
            to='/dashboard/products/'
            exact
            strict
            className="nav-item is-tab"
            activeClassName="is-active"
          >
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavigationTop
