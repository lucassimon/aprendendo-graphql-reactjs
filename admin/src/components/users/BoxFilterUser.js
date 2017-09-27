import React from 'react';


const BoxFilterUser = (props) => {

  return (
    <nav className="panel">
      <p className="panel-heading">
        Filtros
      </p>
      <label className="panel-block">
        <input type="checkbox" />
        Está Ativo?
      </label>
      <label className="panel-block">
        <input type="checkbox" />
        É admin?
      </label>
      <label className="panel-block">
        <input type="checkbox" />
        É super usuário?
      </label>
      <div className="panel-block">
        <button className="button is-info is-outlined is-fullwidth">
          Limpar Filtros
        </button>
      </div>
    </nav>
  )
}

export default BoxFilterUser
