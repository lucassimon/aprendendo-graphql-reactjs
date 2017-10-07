import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductBox = (props) => {
  let image = (<img src="https://placehold.it/1280x960" />)

  if (props.image) {
    image = (<img src="{props.image}" />)
  }


  return (
    <NavLink
      to='/dashboard/products/detail/'
      exact
      className="">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              {props.name}
            </p>
          </header>
          <div className="card-image">
            <figure className="image is-4by3">
              {
                image
              }
            </figure>
          </div>
          <div className="card-content">
            <div className="panel-block-item">
              <span className="solds">
                <span className="icon">
                  <i className="fa fa-money"></i>
                </span>
                8k Solds
              </span>
              <span className="likes">
                <span className="icon">
                  <i className="fa fa-heart"></i>
                </span>
                303k Likes
              </span>
              <span className="comments">
                <span className="icon">
                  <i className="fa fa-comment"></i>
                </span>
                12k Comments
              </span>
            </div>
          </div>
        </div>
    </NavLink>
  )
}

export default ProductBox
