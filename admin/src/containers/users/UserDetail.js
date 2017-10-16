import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Hero from '../../components/Hero'
import Breadcrumb from '../../components/Breadcrumb'
import BoxCommissionInfo from '../../components/users/BoxCommissionInfo'


class UserDetail extends Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div className="is-light">
        <Hero title="Users" subtitle="Profile of user and their commissions" />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-three-quarters">
                <Breadcrumb items={[
                  {
                    name: 'Dashboard',
                    url: '/dashboard/',
                  }, {
                    name: 'Users',
                    url: '/dashboard/users/',
                  }, {
                    name: 'User Name',
                    url: '/dashboard/users/detail/',
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
              <div className="column is-4 has-text-centered">
                <p className="">
                  <span className="title is-bold">John Smith</span>
                </p>
                <p className="tagline">
                  teste@teste.com <br />
                </p>
              </div>
              <div className="column is-4 followers has-text-centered">
                <p className="stat-val">129k</p>
                <p className="stat-key">Sales</p>
              </div>
              <div className="column is-2 following has-text-centered">
                <p className="stat-val">2k</p>
                <p className="stat-key">Commissions paid</p>
              </div>
              <div className="column is-2 likes has-text-centered">
                <p className="stat-val">29</p>
                <p className="stat-key">Other commissions</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="box">
              <nav className="level">
                <div className="level-left">
                  <button className="level-item button">
                    <i className="fa fa-arrow-left "></i>
                  </button>
                  <div className="level-item">
                    <h3 className="title"> September / 2017 </h3>
                  </div>
                  <button className="level-item button">
                    <i className="fa fa-arrow-right"></i>
                  </button>
                </div>

                <div className="level-right">
                  <p className="level-item"><strong>All</strong></p>
                  <p className="level-item"><a>Published</a></p>
                  <p className="level-item"><a>Drafts</a></p>
                  <p className="level-item"><a>Deleted</a></p>
                  <p className="level-item">
                    <a className="button is-info">
                      <i className="fa fa-filter"></i>
                    </a>
                  </p>
                </div>
              </nav>
            </div>
          </div>
        </section>


        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                <BoxCommissionInfo />
              </div>
              <div className="column is-4">
                <BoxCommissionInfo />
              </div>
              <div className="column is-4">
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
