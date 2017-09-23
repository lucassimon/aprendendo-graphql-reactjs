import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const Header = () => {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'> Dashboard </Link>
          </li>
          <li>
            <Link to='/users'> Usuários </Link>
          </li>
          <li>
            <Link to='/courses'> Cursos </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header