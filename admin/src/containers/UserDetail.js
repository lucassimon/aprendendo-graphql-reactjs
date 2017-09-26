import React, { Component } from 'react'
import Hero from '../components/Hero'


const Users = [
  {
    id: 1, name:'User 1'
  },
  {
    id: 2, name:'User 2'
  },
  {
    id: 3, name:'User 3'
  },
  {
    id: 4, name:'User 4'
  },
  {
    id: 5, name:'User 5'
  },
]

class UserDetail extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Hero title="Usuário" subtitle="Detalhes do usuário" />
      </div>
    )
  }

}

export default UserDetail