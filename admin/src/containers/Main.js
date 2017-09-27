import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Users from './Users'
import Products from './Products'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/users/' component={Users} />
      <Route path='/products/' component={Products}/>
    </Switch>
  </main>
)

export default Main