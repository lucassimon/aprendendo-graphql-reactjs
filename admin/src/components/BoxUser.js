import React from 'react';


const BoxUser = (props) => {

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.email}</strong>
              <br />
              Ativo: {props.active ? <i className="fa fa-check"></i> : <i className="fa fa-remove"></i>}
              <br />
              Admin: {props.is_admin ? <i className="fa fa-check"></i> : <i className="fa fa-remove"></i>}
              <br />
              Super usuário: {props.is_superuser ? <i className="fa fa-check"></i> : <i className="fa fa-remove"></i>}
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default BoxUser