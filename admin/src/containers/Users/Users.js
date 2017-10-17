import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserList from './UsersList'
import UserAdd from './UserAdd'
import UserDetail from './UserDetail'

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


