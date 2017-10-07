import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductList from './products/ProductList'
import ProductAdd from './products/ProductAdd'
import ProductDetail from './products/ProductDetail'

const Courses = ({match}) => {
  return (
    <Switch>
      <Route exact path={`${match.url}/`} component={ProductList} />
      <Route path={`${match.url}/add/`} component={ProductAdd}/>
      <Route path={`${match.url}/detail/`} component={ProductDetail}/>
    </Switch>
  )
}

export default Courses
