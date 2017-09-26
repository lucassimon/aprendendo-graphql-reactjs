import React from 'react';
import {NavLink} from 'react-router-dom'


const NavigationTop = () => {

  return (

    <div className="container">
      <nav className="navbar" aria-label="main navigation">
        <div className="navbar-brand">

        </div>
        <div className="navbar-menu">
          <NavLink
            to='/'
            exact
            strict
            className="nav-item is-tab"
            activeClassName="is-active"
          >
            Dashboard
          </NavLink>
          <NavLink
            to='/users/'
            exact
            strict
            className="nav-item is-tab"
            activeClassName="is-active"
          >
            Usuários
          </NavLink>
          <NavLink
            to='/courses/'
            exact
            strict
            className="nav-item is-tab"
            activeClassName="is-active"
          >
            Cursos
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default NavigationTop
