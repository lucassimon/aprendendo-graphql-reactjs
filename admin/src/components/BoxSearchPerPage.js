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
        <div className="control has-text-right">
          <div className="select">
            <select>
              <option>Por página</option>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxSearchPerPage