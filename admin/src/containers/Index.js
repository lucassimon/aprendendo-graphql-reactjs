import React from 'react'
import { NavLink } from 'react-router-dom'

const Index = () => (
  <section className="hero is-success is-fullheight">
    <div className="hero-head">
      <header className="nav">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item" href="../">
              Bulma Landing
            </a>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <span className="nav-item">

            </span>
          </div>
        </div>
      </header>
    </div>

    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h1 className="title">
            Coming Soon
          </h1>
          <h2 className="subtitle">
             $this is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
          </h2>
          <div className="box">

            <ul className="menu-list">
              <li>
                <NavLink
                  to='/login/'
                  exact
                  >
                    Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/register/'
                  exact
                  >
                    Registrar uma conta
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/dashboard/'
                  exact
                  >
                    Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </section>
)

export default Index
