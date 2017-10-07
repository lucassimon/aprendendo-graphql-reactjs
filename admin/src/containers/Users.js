import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import UserList from './users/UsersList'
import UserAdd from './users/UserAdd'
import UserDetail from './users/UserDetail'

const Users = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}/`} component={UserList} />
      <Route path={`${match.url}/add/`} component={UserAdd}/>
      <Route path={`${match.url}/:id/`} component={UserDetail}/>
    </Switch>
  )
}

export default Users


