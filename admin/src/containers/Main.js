import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import NavigationTop from '../components/NavigationTop'
import Dashboard from './Dashboard/Dashboard'
import Users from './Users/Users'
import Products from './Products/Products'
import { connect } from 'react-redux'
import Error404 from './404'


function PrivateRoute ({component: Component, authed, active, admin, ...rest}) {

  const isValid = authed && active && admin

  return (
    <Route
      {...rest}
      render={(props) => isValid
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}


const Main = ({match, authed, active, admin}) => (
  <div>
    <NavigationTop />
    <Switch>
      <Route authed={authed} active={active} admin={admin} exact path={`${match.url}`} component={Dashboard}/>
      <Route authed={authed} active={active} admin={admin} path={`${match.url}/sellers`} component={Users} />
      <Route authed={authed} active={active} admin={admin} path={`${match.url}/products`} component={Products}/>
      <Route component={Error404}/>
    </Switch>
  </div>
)


const mapStateToProps = (state) => ({
  authed: state.auth.authenticated,
  active: state.profile.user.active,
  admin: state.profile.permissions.admin
})


export default connect(mapStateToProps)(Main);
