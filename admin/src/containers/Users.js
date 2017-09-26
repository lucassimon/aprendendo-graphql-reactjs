import React, { Component } from 'react'
import Hero from '../components/Hero'

class Users extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Hero title="Usuários" subtitle="Nossos usuários" />
      </div>
    )
  }

}

export default Users