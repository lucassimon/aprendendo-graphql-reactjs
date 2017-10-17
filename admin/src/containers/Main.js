import React from 'react'
import { Switch, Route} from 'react-router-dom'
import NavigationTop from '../components/NavigationTop'
import Dashboard from './Dashboard/Dashboard'
import Users from './Users/Users'
import Products from './Products/Products'

const Main = ({match}) => (
  <div>
    <NavigationTop />
    <Switch>
      <Route exact path={`${match.url}/`} component={Dashboard}/>
      <Route path={`${match.url}/sellers/`} component={Users} />
      <Route path={`${match.url}/products/`} component={Products}/>
    </Switch>
  </div>
)

export default Main
