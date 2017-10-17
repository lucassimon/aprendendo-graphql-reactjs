import React from 'react';


const BoxFilterUser = (props) => {

  return (
    <div>
      <nav className="panel">
        <p className="panel-heading">
          Filters
        </p>
        <label className="panel-block">
          <aside className="menu">
            <p className="menu-label">
              Is active?
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
                    Yes
                  </label>


                  <label className="radio">
                    <input
                      type="radio"
                      name="is_active"
                      value={2}
                      checked={props.active === 2}
                      onChange={(e)=>{props.updateBoxFilter(e.target.name, e.target.value)}}
                    />
                    No
                  </label>

                  <label className="radio">
                    <input
                      type="radio"
                      name="is_active"
                      value={3}
                      checked={props.active === 3}
                      onChange={(e)=>{props.updateBoxFilter(e.target.name, e.target.value)}}
                    />
                    Both
                  </label>
                </div>
              </li>
            </ul>
          </aside>
        </label>
        <label className="panel-block">
          <aside className="menu">
            <p className="menu-label">
              Is admin?
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
                    Yes
                  </label>


                  <label className="radio">
                    <input
                      type="radio"
                      name="is_admin"
                      value={2}
                      checked={props.admin === 2}
                      onChange={(e)=>{props.updateBoxFilter(e.target.name, e.target.value)}}
                    />
                    No
                  </label>

                  <label className="radio">
                    <input
                      type="radio"
                      name="is_admin"
                      value={3}
                      checked={props.admin === 3}
                      onChange={(e)=>{props.updateBoxFilter(e.target.name, e.target.value)}}
                    />
                    Both
                  </label>
                </div>
              </li>
            </ul>
          </aside>
        </label>
        <label className="panel-block">
          <aside className="menu">
            <p className="menu-label">
              Is super user?
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
                    Yes
                  </label>


                  <label className="radio">
                    <input
                      type="radio"
                      name="is_superuser"
                      value={2}
                      checked={props.superuser === 2}
                      onChange={(e)=>{props.updateBoxFilter(e.target.name, e.target.value)}}
                    />
                    No
                  </label>

                  <label className="radio">
                    <input
                      type="radio"
                      name="is_superuser"
                      value={3}
                      checked={props.superuser === 3}
                      onChange={(e)=>{props.updateBoxFilter(e.target.name, e.target.value)}}
                    />
                    Both
                  </label>
                </div>
              </li>
            </ul>
          </aside>
        </label>
        <div className="panel-block">
          <button className="button is-info is-outlined is-fullwidth" onClick={()=>{props.clearFilters()}}>
            Clear Filters
          </button>
        </div>
      </nav>
    </div>
  )
}

export default BoxFilterUser
