import React from 'react'


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
  const operators = props.operators.map((item, index)=>{
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
    <div>
      <div className="columns">
        <div className="column is-12">

          <form onSubmit={(e) => props.search(e)}>
            <div className="field has-addons">
              <p className="control">
                <span className="select">
                  <select
                    name='field'
                    value={props.field}
                    onChange={(event)=>props.updateField(event.target.value)}
                  >
                    {fields}
                  </select>

                </span>
              </p>
              <p className="control">
                <span className="select">
                  <select
                    name='operator'
                    value={props.operator}
                    onChange={(event)=>props.updateOperator(event.target.value)}
                  >
                    {operators}
                  </select>
                </span>
              </p>
              <p className="control is-expanded">
                <input
                  className="input"
                  name='query'
                  type="text"
                  value={props.query}
                  onChange={(event)=>props.updateQuery(event.target.value)}
                  placeholder="Informe um texto para pesquisa"
                />
              </p>
              <p className="control">
                <button
                  type="submit"
                  className="button is-info"

                >
                  Pesquisar
                </button>
              </p>
            </div>
          </form>
        </div>

      </div>
      <div className="columns">
        <div className="column is-12">
          <div className="message is-info">
            <div className="message-header">
              Informação sobre a pesquisa
            </div>
            <div className="message-body">
              Para a pesquisa inicial apague o campo texto acima e clique no botão <b>Pesquisar</b> novamente <br />
              Ao <b> Limpar Filtros </b> os filtros voltam ao estado original e a pesquisa é feita novamente
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BoxSearch
