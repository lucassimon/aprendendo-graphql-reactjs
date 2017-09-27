import React from 'react';


const TileCountUser = (props) => {

  return (
    <article className="tile is-child notification is-primary">
      <p className="title">Usuários</p>
      <p className="subtitle">Quantidade de usuários</p>
      <div className="has-text-centered">
        <p className="title" >{props.data}</p>
      </div>
    </article>
  )

}

export default TileCountUser
