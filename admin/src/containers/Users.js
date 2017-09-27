import React, { Component } from 'react'
import Hero from '../components/Hero'
import UserList from './users/UsersList'
import UserService from '../services/UserService'


class Users extends Component {

  constructor(props) {
    super(props)

    this.state = {
      search_args: {
        email: null,
        per_page: 10,
        is_active: null,
        is_admin: null,
        is_superuser: null,
        page: 1
      },
      users: [],
      count_users: 0
    }
  }

  componentDidMount() {
    UserService.getUsersPerPage(this.state.search_args)
    .then(
      (data) => {

        if (data.success) {
          this.setState({
            users: data.data,
            count_users: data.total
          })
        }

      }
    ).catch(
      (error) => {
        console.log('tratar status code response', error)
      }
    )
  }

  render() {
    return (
      <div>
        <Hero title="Usuários" subtitle="Listagem de usuários" />
        <UserList items={this.state.users} total={this.state.count_users} />
      </div>
    )
  }

}

export default Users
