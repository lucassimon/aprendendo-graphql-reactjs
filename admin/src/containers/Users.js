import React, { Component } from 'react'
import Hero from '../components/Hero'
import UserList from './users/UsersList'


class Users extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: [
        {
          id: 1,
          name:'User 1',
          email:'user1@test.com',
          active: true,
          is_admin: true,
          is_superuser: true
        },
        {
          id: 2,
          name:'User 2',
          email:'user2@test.com',
          active: false,
          is_admin: false,
          is_superuser: false
        },
        {
          id: 3,
          name:'User 3',
          email:'user3@test.com',
          active: false,
          is_admin: false,
          is_superuser: false
        },
        {
          id: 4,
          name:'User 4',
          email:'user4@test.com',
          active: false,
          is_admin: false,
          is_superuser: false
        },
        {
          id: 5,
          name:'User 5',
          email:'user5@test.com',
          active: true,
          is_admin: false,
          is_superuser:false
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <Hero title="Usuários" subtitle="Listagem de usuários" />
        <UserList items={this.state.users} />
      </div>
    )
  }

}

export default Users