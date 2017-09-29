import React, { Component } from 'react'
import Hero from '../components/Hero'
import UserList from './users/UsersList'

import BtnAddUser from '../components/users/BtnAddUser'

class Users extends Component {

  render() {
    return (
      <div>
        <Hero title="Usuários" subtitle="Listagem de usuários" />

        <section className="">
          <div className="container">
            <BtnAddUser />
          </div>
        </section>

        <UserList />
      </div>
    )
  }

}

export default Users
