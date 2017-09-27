import React from 'react';


const BoxSearch = (props) => {
  const fields = props.fields.map((item, index)=>{
    return (
      <option
        key={index}
        value={item.key}
      >
        {item.value}
      </option>
    )
  })
  return (
    <div className="columns">
      <div className="column is-12">
        <div className="field has-addons">
          <p className="control">
            <span className="select">
              <select>
                {fields}
              </select>
            </span>
          </p>
          <p className="control is-expanded">
            <input className="input" type="text" placeholder="Informe um texto para pesquisa" />
          </p>
          <p className="control">
            <a className="button is-info">
              Pesquisar
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BoxSearch
