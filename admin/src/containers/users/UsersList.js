import React, { Component } from 'react'
import has from 'lodash/has';
import isPlainObject from 'lodash/isPlainObject'
// Services

import UserService from '../../services/UserService'

// Components

import BoxUser from '../../components/users/BoxUser'
import BoxSearch from '../../components/BoxSearch'
import BoxSearchPerPage from '../../components/BoxSearchPerPage'
import BoxFilterUser from '../../components/users/BoxFilterUser'
import Paginate from '../../components/Paginate'

class UserList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'Usuário(s)',
      search_args: {
        field: null,
        query: null,
        operator: null,
        per_page: 10,
        is_active: null,
        is_admin: null,
        is_superuser: null,
        page: 1
      },
      users: [],
      count_users: 0,
      fields:[
        {key:'email', value:'Email'},
        {key:'name', value:'Name'}
      ],
      operators:[
        {key:'equal', value:'Igual a'},
        {key:'startswith', value:'Começa com'},
        {key:'like', value:'Contém'}
      ]
    }

    this.updateSearchParams = this.updateSearchParams.bind(this)
    this.search = this.search.bind(this)
  }

  updateSearchParams(args) {

    // verifica se é um objeto
    if (!isPlainObject(args)) {
      return
    }

    // dica
    // const search_args = {
    //     ...(this.state.searchArgs || {}),
    //     ...(args || {})
    // };

    let { search_args } = this.state;

    if (has(args, 'field')) {
      search_args.field = args.field
    }

    if (has(args, 'operator')) {
      search_args.operator = args.operator
    }

    if (has(args, 'query')) {
      search_args.query = args.query
    }

    if (has(args, 'per_page')) {
      search_args.per_page = args.per_page
    }

    if (has(args, 'is_active')) {
      search_args.is_active = args.is_active
    }

    if (has(args, 'is_admin')) {
      search_args.is_admin = args.is_admin
    }

    if (has(args, 'is_superuser')) {
      search_args.is_superuser = args.is_superuser
    }

    if (has(args, 'page')) {
      search_args.page = args.page
    }

    this.setState({ search_args }, () => this.search())

  }

  search() {
    console.log(this.state.search_args)
    // TODO: Atraves do estado atual realizar a chamada no servidor
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

    const items = this.state.users.map((item, index)=>{
      return (
        <BoxUser
          key={index}
          id={item.id}
          name={item.name}
          email={item.email}
          active={item.active}
          is_admin={item.is_admin}
          is_superuser={item.is_superuser}
        />
      )
    })

    return (
      <section className="">
        <div className="container">

          <BoxSearch
            fields={this.state.fields}
            operators={this.state.operators}
            updateSearchParams={this.updateSearchParams}
          />

          <BoxSearchPerPage
            count={this.state.count_users}
            name={this.state.name}
          />

          <div className="columns">
              <div className="column is-one-quarter">
                <BoxFilterUser />
              </div>
              <div className="column">
                {items}
              </div>
          </div>

          <Paginate />
        </div>
      </section>
    )
  }
}


export default UserList
