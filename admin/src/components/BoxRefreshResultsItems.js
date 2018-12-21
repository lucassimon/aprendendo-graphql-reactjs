import React, { Component } from 'react'

class BoxRefreshResultsItems extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search_args: {
        field: null,
        query: null,
        operator: null,
        is_active: null,
        is_admin: null,
        is_superuser: null,
      }
    }
  }

  render() {
    return (
      <div className="column">
        <a
          className="button is-primary is-pulled-right"
          onClick={this.props.updateSearchParams(this.state)}
        >
          <span className="icon">
            <i className="fa fa-refresh"></i>
          </span>
          <span>Refresh</span>
        </a>
      </div>
    )
  }
}

export default BoxRefreshResultsItems
