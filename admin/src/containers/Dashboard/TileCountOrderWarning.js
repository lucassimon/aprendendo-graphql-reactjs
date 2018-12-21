import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


const TileCountOrderWarning = (props) => {

  return (
    <NavLink
        to="/dashboard/products/"
        className="tile is-child"
      >
        <article className="notification is-warning">
          <p className="title">Orders</p>
          <p className="subtitle">Quantity of warning orders</p>
          <div className="has-text-centered">
            <p className="title" >{props.productCount}</p>
          </div>
        </article>
      </NavLink>
  )

}
const mapStateToProps = (state) => ({ productCount: state.dashboard.productsQty })

export default connect(mapStateToProps)(TileCountOrderWarning);
