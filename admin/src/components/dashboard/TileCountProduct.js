import React from 'react';
import { NavLink } from 'react-router-dom'

const TileCountProduct = (props) => {

  return (
    <NavLink
        to="/dashboard/products/"
        className="tile is-child"
      >
        <article className="notification is-warning">
          <p className="title">Products</p>
          <p className="subtitle">Quantity of products</p>
          <div className="has-text-centered">
            <p className="title" >{props.data}</p>
          </div>
        </article>
      </NavLink>
  )

}

export default TileCountProduct
