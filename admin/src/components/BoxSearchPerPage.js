import React from 'react';


const BoxSearchPerPage = (props) => {

  return (
    <div className="columns">
      <div className="column is-two-thirds">
        <h4 >
          Listando {props.count} {props.name}
        </h4>
      </div>
      <div className="column">
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select name="perPage">

                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='30'>30</option>
                <option value='40'>40</option>
              </select>
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Por Página
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxSearchPerPage
