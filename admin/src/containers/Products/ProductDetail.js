import React from 'react'
import Hero from '../../components/Hero'

import Breadcrumb from '../../components/Breadcrumb'

const ProductDetail = ({match, props}) => {
  return (
    <div className="">
      <Hero title="Products" subtitle={"Products Name | Category"} />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <Breadcrumb items={[
                {
                  name: 'Dashboard',
                  url: '/dashboard/',
                }, {
                  name: 'Products',
                  url: '/dashboard/products/',
                }, {
                  name: 'Product Name',
                  url: '/dashboard/products/details/',
                  active: true
                },
              ]} />
            </div>
            <div className="column is-5 is-offset-1">
              {/*
              <div className="field is-grouped">

                <p className="control">
                  <NavLink
                    to="/dashboard/products/add/"
                    className="button is-success "
                  >
                    Adicionar
                  </NavLink>
                </p>
                <p className="control">
                  <NavLink
                    to="/dashboard/products/add/"
                    className="button is-warning "
                  >
                    Editar
                  </NavLink>
                </p>
                <p className="control">
                  <NavLink
                    to="/dashboard/products/add/"
                    className="button is-danger "
                  >
                    Delete
                  </NavLink>
                </p>
              </div>
              */}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <div className="image is-2by2">
                <img src="https://placehold.it/1000x1000" alt="The product is" />
              </div>
            </div>
            <div className="column is-5 is-offset-1">
              <div className="title is-2">Item Title
              </div>
                <p className="title is-3 has-text-muted">$ 39.95</p>
                <hr />
                <br />
                <p className="">
                  <i className="fa fa-star title is-5" ></i>
                  <i className="fa fa-star title is-5" ></i>
                  <i className="fa fa-star title is-5" ></i>
                  <i className="fa fa-star title is-5"></i>
                  <i className="fa fa-star title is-5"></i>
                  &nbsp; &nbsp;
                  <strong>41 Reviews</strong>
                  &nbsp; &nbsp;
                  <a href="">show all</a>
                </p>
                <br/>
                <p>
                  Suspendisse sodales metus justo, ullamcorper iaculis purus interdum in. Sed ultricies enim felis, in interdum urna malesuada a. Morbi id ligula vel leo elementum dignissim quis vel purus. Donec iaculis, est ac maximus vestibulum, sapien mi lacinia urna, at laoreet felis lectus nec urna. Fusce egestas, neque vitae blandit scelerisque, leo arcu pellentesque risus, et volutpat neque nunc id massa. Aenean dapibus leo vel purus malesuada, eu ultrices nulla consequat. Duis erat orci, lobortis sed dictum id, pretium a nibh. Mauris pharetra ligula consequat gravida ornare.
                </p>
                <br />
                <br />
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="has-text-right">
                      <strong>Item ID</strong>
                    </td>
                    <td>1234</td>
                    </tr>
                    <tr>
                      <td className="has-text-right">
                        <strong>Seller</strong>
                      </td>
                      <td>jsmith</td>
                    </tr>
                    <tr>
                      <td className="has-text-right">
                        <strong>Added</strong>
                      </td>
                      <td>3 days ago</td>
                    </tr>
                    <tr>
                      <td className="has-text-right">
                        <strong>Views</strong>
                      </td>
                      <td>3</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
