import React, { Component } from 'react';


class BoxSearch extends Component {

  constructor(props) {
    super(props)

    this.state = {
      query: '',
      field: this.props.fields[0].key,
      operator: this.props.operators[0].key
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    console.log(this.state)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {


    const fields = this.props.fields.map((item, index)=>{
      return (
        <option
          key={index}
          value={item.key}
        >
          {item.value}
        </option>
      )
    })
    const operators = this.props.operators.map((item, index)=>{
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
                <select
                  name='field'
                  value={this.state.field}
                  onChange={this.handleChange}
                >
                  {fields}
                </select>
                <span>{this.state.field}</span>
              </span>
            </p>
            <p className="control">
              <span className="select">
                <select
                  name='operator'
                  value={this.state.operator}
                  onChange={this.handleChange}
                >
                  {operators}
                </select>
                <span>{this.state.operator}</span>
              </span>
            </p>
            <p className="control is-expanded">
              <input
                className="input"
                name='query'
                type="text"
                value={this.state.query}
                onChange={this.handleInputChange}
                placeholder="Informe um texto para pesquisa"
              />
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
}

export default BoxSearch
