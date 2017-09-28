import React, { Component } from 'react'
import FormErrors from './FormErrors'

class BoxSearch extends Component {

  constructor(props) {
    super(props)

    this.state = {
      query: '',
      field: this.props.fields[0].key,
      operator: this.props.operators[0].key,
      formErrors: {query: ''},
      queryValid: false,
      formValid: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateField = this.validateField.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  componentDidMount() {
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let queryValid = this.state.queryValid

    switch(fieldName) {
      case 'query':
        queryValid = value.length >= 3;
        if (!queryValid) {
          fieldValidationErrors.query = ' A pesquisa precisa ter no minimo 3 caracteres'
        } else {
          fieldValidationErrors.query = ''
        }

        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        queryValid: queryValid
      },
      this.validateForm
    )
  }

  validateForm() {
    this.setState({
      formValid: this.state.queryValid
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    },
    () => this.validateField(name, value)
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updateSearchParams(this.state)
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
      <div>
        <div className="columns">
          <div className="column is-12">
            <form onSubmit={this.handleSubmit}>
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
                  </span>
                </p>
                <p className="control is-expanded">
                  <input
                    className={"input " + (!this.state.queryValid ? 'is-danger' : 'is-success')}
                    name='query'
                    type="text"
                    value={this.state.query}
                    onChange={this.handleInputChange}
                    placeholder="Informe um texto para pesquisa"
                  />
                </p>
                <p className="control">
                  <button
                    type="submit"
                    className="button is-info"
                    disabled={!this.state.formValid}
                  >
                    Pesquisar
                  </button>
                </p>
              </div>
            </form>
          </div>

        </div>
        <div className="columns">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
    )
  }
}

export default BoxSearch
