import React from 'react'
import { Switch, Route} from 'react-router-dom'
import NavigationTop from '../components/NavigationTop'
import Dashboard from './Dashboard'
import Users from './Users'
import Products from './Products'

const Main = ({match}) => (
  <div>
    <NavigationTop />
    <Switch>
      <Route exact path={`${match.url}/`} component={Dashboard}/>
      <Route path={`${match.url}/users/`} component={Users} />
      <Route path={`${match.url}/products/`} component={Products}/>
    </Switch>
  </div>
)

export default Main
