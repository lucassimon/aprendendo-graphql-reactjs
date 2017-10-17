import React, { Component } from 'react'

class FacebookSuccess extends Component {
  
  componentDidMount() {
    /* Não funciona no I.E */
    const search = this.props.location.search
    const params = new URLSearchParams(search)
    const jwt = params.get('JWT')
    const refreshJwt = params.get('REFRESH')
    console.log(jwt)
    console.log(refreshJwt)
  }

  render() {
    return (
      <div className="">
        <p>
          Aguarde....
        </p>
      </div>
    )
  }
}

export default FacebookSuccess
