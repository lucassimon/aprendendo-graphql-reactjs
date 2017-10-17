import React from 'react'
import Hero from '../../components/Hero'
import Breadcrumb from '../../components/Breadcrumb'

import ProductBox from './ProductBox'

const ProductList = ({match, props}) => {
  return (
    <div className="">
      <Hero title="Products" subtitle="All products paginated" />
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
              {/*
              <NavLink
                to="/dashboard/products/add/"
                className="button is-success"
              >
                Add
              </NavLink>
              */}
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">

          <div className="columns">
            <div className="column column is-4 is-offset-8 has-text-right">
              <a className="button is-active"><i className="fa fa-th title is-5"></i></a>
              <a className="button"><i className="fa fa-align-justify title is-5"></i></a>
            </div>
          </div>

          <div className="columns">

            <div className="column is-4">
              <ProductBox image={false} name="Product 1" />
            </div>

            <div className="column is-4">
              <ProductBox image={false} name="Product 2" />
            </div>

            <div className="column is-4">
              <ProductBox image={false} name="Product 3" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductList
