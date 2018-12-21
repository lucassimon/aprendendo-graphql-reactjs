import React from 'react'

import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const TileCountOrderSuccess = (props) => {

  return (

      <NavLink
        to="/dashboard/sellers/"
        className="tile is-child"
      >
        <article className="notification is-primary">
          <p className="title">Orders</p>
          <p className="subtitle">Quantity of orders success</p>
          <div className="has-text-centered">
            <p className="title" >{props.userCount}</p>
          </div>
        </article>
      </NavLink>
  )

}
const mapStateToProps = (state) => ({ userCount: state.dashboard.sellersQty })


export default connect(mapStateToProps)(TileCountOrderSuccess);
