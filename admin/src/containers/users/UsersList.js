import React, { Component } from 'react'

// Services

import UserService from '../../services/UserService'

// Components

import BoxUser from '../../components/users/BoxUser'
import BoxSearch from '../../components/BoxSearch'
import BoxSearchPerPage from '../../components/BoxSearchPerPage'
import BoxSearchCountItems from '../../components/BoxSearchCountItems'
import BoxFilterUser from '../../components/users/BoxFilterUser'
import Paginate from '../../components/Paginate'

class UserList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'Usuário(s)',
      search_args: {
        field: 'email',
        query: '',
        operator: 'equal',
        per_page: 10,
        is_active: 3,
        is_admin: 3,
        is_superuser: 3,
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
        {key:'contains', value:'Contém'}
      ]
    }

    this.updateField = this.updateField.bind(this)
    this.updateOperator = this.updateOperator.bind(this)
    this.updateQuery = this.updateQuery.bind(this)
    this.updatePerPage = this.updatePerPage.bind(this)
    this.updateBoxFilter = this.updateBoxFilter.bind(this)
    this.searchBox = this.searchBox.bind(this)
    this.search = this.search.bind(this)
  }

  updatePerPage(args) {
    let { search_args } = this.state

    args = parseInt(args, 10)

    search_args.per_page = args

    this.setState({ search_args }, () => this.search())
  }

  updateField(value) {
    let { search_args } = this.state

    console.log(value)

    search_args.field = value

    this.setState({ search_args })
  }

  updateOperator(value) {
    let { search_args } = this.state

    search_args.operator = value

    this.setState({ search_args })
  }

  updateBoxFilter(name, args) {

    let { search_args } = this.state

    args = parseInt(args, 10)

    search_args[name] = args

    this.setState({ search_args }, () => this.search())
  }

  updateQuery(value) {
    // dica
    // const search_args = {
    //     ...(this.state.searchArgs || {}),
    //     ...(args || {})
    // };

    let { search_args } = this.state

    search_args.query = value

    this.setState({ search_args })

  }

  searchBox(e) {
    e.preventDefault()
    this.search()
  }

  search() {
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

  componentDidMount() {
    this.search()
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
            field={this.state.search_args.field}
            operator={this.state.search_args.operator}
            query={this.state.search_args.query}
            updateField={this.updateField}
            updateOperator={this.updateOperator}
            updateQuery={this.updateQuery}
            search={this.searchBox}
          />

          <div className="columns">

            <BoxSearchCountItems
              count={this.state.count_users}
              name={this.state.name}
            />

            <BoxSearchPerPage updatePerPage={this.updatePerPage} />


          </div>



          <div className="columns">
              <div className="column is-one-quarter">
                <BoxFilterUser
                  active={this.state.search_args.is_active}
                  admin={this.state.search_args.is_admin}
                  superuser={this.state.search_args.is_superuser}
                  updateBoxFilter={this.updateBoxFilter}
                />
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
