import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductList from './ProductList'
import ProductAdd from './ProductAdd'
import ProductDetail from './ProductDetail'

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
