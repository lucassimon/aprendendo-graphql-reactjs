import React from 'react'
import Hero from '../../components/Hero'
import Breadcrumb from '../../components/Breadcrumb'
import { NavLink } from 'react-router-dom'

const ProductAdd = ({match, props}) => {
  return (
    <div className="">
      <Hero title="Products" subtitle="Adds a products paginated" />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-three-quarters">
              <Breadcrumb items={[
                {
                  name: 'Dashboard',
                  url: '/dashboard/',
                }, {
                  name: 'Products',
                  url: '/products/',
                  active: true
                },
              ]} />
            </div>
            <div className="column has-text-right">
              <NavLink
                to="/dashboard/products/add/"
                className="button is-success"
              >
                Add
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductAdd
