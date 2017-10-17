import React, { Component } from 'react'
import Hero from '../../components/Hero'
import Breadcrumb from '../../components/Breadcrumb'
import BoxCommissionInfo from './BoxCommissionInfo'


class UserDetail extends Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div className="is-light">
        <Hero title="Sellers" subtitle="Profile of user and their commissions" />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-three-quarters">
                <Breadcrumb items={[
                  {
                    name: 'Dashboard',
                    url: '/dashboard/',
                  }, {
                    name: 'Sellers',
                    url: '/dashboard/sellers/',
                  }, {
                    name: 'Seller Name',
                    url: '/dashboard/sellers/detail/',
                    active: true
                  },
                ]} />
              </div>
              <div className="column has-text-right">

              </div>
            </div>
          </div>
        </section>
        <section className="is-light">
          <div className="container">
            <div className="columns">
              <div className="column is-one-quarter">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="The user avatar" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src="https://bulma.io/images/placeholders/96x96.png" alt="The user avatar" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <BoxCommissionInfo />
              </div>
            </div>  
          </div>
        </section>
      </div>
    )
  }

}

export default UserDetail
