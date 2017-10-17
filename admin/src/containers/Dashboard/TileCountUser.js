import React from 'react'

import { NavLink } from 'react-router-dom'


const TileCountUser = (props) => {

  return (

      <NavLink
        to="/dashboard/sellers/"
        className="tile is-child"
      >
        <article className="notification is-primary">
          <p className="title">Sellers</p>
          <p className="subtitle">Quantity of sellers</p>
          <div className="has-text-centered">
            <p className="title" >{props.data}</p>
          </div>
        </article>
      </NavLink>
  )

}

export default TileCountUser
