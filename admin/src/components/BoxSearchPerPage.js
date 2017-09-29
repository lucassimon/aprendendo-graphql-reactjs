import React from 'react';


const BoxSearchPerPage = (props) => {

  return (
    <div className="column">
      <div className="field">
        <div className="control is-expanded">
          <div className="select is-fullwidth">
            <select name="perPage" onChange={(event)=>props.updatePerPage(event.target.value)}>
              <option value='10'>10 por página</option>
              <option value='20'>20</option>
              <option value='30'>30</option>
              <option value='40'>40</option>
            </select>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BoxSearchPerPage
