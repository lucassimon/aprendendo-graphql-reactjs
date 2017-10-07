import React from 'react'
import { NavLink } from 'react-router-dom'

const Index = () => (
  <section className="section">
    <ul>
      <NavLink
        to='/login/'
        exact
        className="nav-item">
          Login
      </NavLink>
      <NavLink
        to='/register/'
        exact
        className="nav-item">
          Registrar uma conta
      </NavLink>
      <NavLink
        to='/dashboard/'
        exact
        className="nav-item">
          Dashboard
      </NavLink>
    </ul>
  </section>
)

export default Index
