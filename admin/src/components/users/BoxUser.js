import React from 'react';

const actionButtons = (props) => {

  return (
    <div className="media-right">
      <div className="field is-grouped">
        <p className="control">
          <a className="button is-warning">Editar</a>
        </p>
        <p className="control">
          <a className="button is-success">Comissões</a>
        </p>
      </div>
    </div>
  )
}

const BoxUser = (props) => {

  return (
    <div className="box">
      <article className="media">
        <div className="media-content">
          <div className="content">
              <strong>{props.name}, {props.email} </strong>
              <br />
              <div className="field is-grouped">
              {
                props.active ?
                <p className="control">
                  <a className="button is-success is-small">
                    Ativo
                  </a>
                </p>
                :
                <p className="control">
                  <a className="button is-danger is-small">
                    Não está ativo
                  </a>
                </p>
              }

              {
                props.is_admin ?
                <p className="control">
                  <a className="button is-success is-small">
                    Admin
                  </a>
                </p>
                :
                <p className="control">
                  <a className="button is-danger is-small">
                    Não é admin
                  </a>
                </p>
              }

              {
                props.is_superuser ?
                <p className="control">
                  <a className="button is-success is-small">
                    Super usuário
                  </a>
                </p>
                :
                <p className="control">
                  <a className="button is-danger is-small">
                    Não é Super usuário
                  </a>
                </p>
              }
              </div>

          </div>
        </div>

      </article>
    </div>
  )
}

export default BoxUser
