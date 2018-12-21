import React from 'react'

import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const TileCountProduct = (props) => {

  return (

      <NavLink
        to="/dashboard/sellers/"
        className="tile is-child"
      >
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">Products</p>
            <p className="subtitle">{ props.userCount }</p>
          </article>
        </div>
      </NavLink>
  )

}
const mapStateToProps = (state) => ({ userCount: state.dashboard.sellersQty })


export default connect(mapStateToProps)(TileCountProduct);
