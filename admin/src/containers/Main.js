import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Users from './Users'
import Courses from './Courses'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/users/' component={Users} />
      <Route path='/courses/' component={Courses}/>
    </Switch>
  </main>
)

export default Main