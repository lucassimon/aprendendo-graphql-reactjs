import React, { Component } from 'react';
import {IndexLink ,Link} from 'react-router-dom'


const NavigationTop = () => {

  return (


    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">

      </div>
      <div className="navbar-menu">
        <Link to='/' className="nav-item is-tab" > Dashboard </Link>
        <Link to='/users' className="nav-item is-tab" > Usuários </Link>
        <Link to='/courses' className="nav-item is-tab" > Cursos </Link>
      </div>
    </nav>
  )
}

export default NavigationTop
