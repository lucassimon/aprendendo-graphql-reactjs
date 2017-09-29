import React from 'react';


const BoxFilterUser = (props) => {

  return (
    <div>

      <nav className="panel">
        <p className="panel-heading">
          Filtros
        </p>
        <label className="panel-block">
          <aside className="menu">
            <p className="menu-label">
              Está Ativo?
            </p>
            <ul className="menu-list">
              <li>
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      name="is_active"
                      value={1}
                      checked={props.active === 1}
                      onChange={(e)=>{props.updateBoxFilter(e.target.name, e.target.value)}}
                    />
                    Sim
                  </label>


                  <label className="radio">
                    <input
                      type="radio"
                      name="is_active"
                      value={2}
                      checked={props.active === 2}
                      onChange={(e)=>{props.updateBoxFilter(e.target.name, e.target.value)}}
                    />
                    Não
                  </label>

                  <label className="radio">
                    <input
                      type="radio"
                      name="is_active"
                      value={3}
                      checked={props.active === 3}
                      onChange={(e)=>{props.updateBoxFilter(e.target.name, e.target.value)}}
                    />
                    Indiferente
                  </label>
                </div>
              </li>
            </ul>
          </aside>
        </label>
        <label className="panel-block">
          <aside className="menu">
            <p className="menu-label">
              É admin?
            </p>
            <ul className="menu-list">
              <li>
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      name="is_admin"
                      value={1}
                      checked={props.admin === 1}
                      onChange={(e)=>{props.updateBoxFilter(e.target.name, e.target.value)}}
                    />
                    Sim
                  </label>


                  <label className="radio">
                    <input
                      type="radio"
                      name="is_admin"
                      value={2}
                      checked={props.admin === 2}
                      onChange={(e)=>{props.updateBoxFilter(e.target.name, e.target.value)}}
                    />
                    Não
                  </label>

                  <label className="radio">
                    <input
                      type="radio"
                      name="is_admin"
                      value={3}
                      checked={props.admin === 3}
                      onChange={(e)=>{props.updateBoxFilter(e.target.name, e.target.value)}}
                    />
                    Indiferente
                  </label>
                </div>
              </li>
            </ul>
          </aside>
        </label>
        <label className="panel-block">
          <aside className="menu">
            <p className="menu-label">
              É super usuário?
            </p>
            <ul className="menu-list">
              <li>
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      name="is_superuser"
                      value={1}
                      checked={props.superuser === 1}
                      onChange={(e)=>{props.updateBoxFilter(e.target.name, e.target.value)}}
                    />
                    Sim
                  </label>


                  <label className="radio">
                    <input
                      type="radio"
                      name="is_superuser"
                      value={2}
                      checked={props.superuser === 2}
                      onChange={(e)=>{props.updateBoxFilter(e.target.name, e.target.value)}}
                    />
                    Não
                  </label>

                  <label className="radio">
                    <input
                      type="radio"
                      name="is_superuser"
                      value={3}
                      checked={props.superuser === 3}
                      onChange={(e)=>{props.updateBoxFilter(e.target.name, e.target.value)}}
                    />
                    Indiferente
                  </label>
                </div>
              </li>
            </ul>
          </aside>
        </label>
        <div className="panel-block">
          <button className="button is-info is-outlined is-fullwidth">
            Limpar Filtros
          </button>
        </div>
      </nav>
    </div>
  )
}

export default BoxFilterUser
