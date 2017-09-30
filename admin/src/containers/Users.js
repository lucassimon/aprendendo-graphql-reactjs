import React, { Component } from 'react'
import Hero from '../components/Hero'
import UserList from './users/UsersList'

import BtnAddUser from '../components/users/BtnAddUser'

const addUser = (props) => {
  return (
    <section className="">
      <div className="container">
        <BtnAddUser />
      </div>
    </section>
  )
}

class Users extends Component {

  render() {
    return (
      <div>
        <Hero title="Usuários" subtitle="Listagem de usuários" />
        <UserList />
      </div>
    )
  }

}

export default Users
