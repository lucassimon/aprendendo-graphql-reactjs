import React from 'react';
import { NavLink } from 'react-router-dom'

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
                    Active
                  </a>
                </p>
                :
                <p className="control">
                  <a className="button is-danger is-small">
                    Active
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
                    Admin
                  </a>
                </p>
              }

              {
                props.is_superuser ?
                <p className="control">
                  <a className="button is-success is-small">
                    Super user
                  </a>
                </p>
                :
                <p className="control">
                  <a className="button is-danger is-small">
                    Super user
                  </a>
                </p>
              }
            </div>

          </div>
        </div>
        <div className="media-right">
          <div className="field is-grouped">
            {/*
              <p className="control">
                <a className="button is-warning">Editar</a>
              </p>
            */}
            <p className="control">
              <NavLink
                to={`/dashboard/users/${props.id}`}
                className="button is-success"
              >
                Comissions
              </NavLink>
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default BoxUser
