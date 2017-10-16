import React from 'react'

const BoxCommissionInfo = (props) => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          Product Name
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          Venda realizada para o cliente Jhon Doe
          <br />
          <span className="tag is-warning">
            Processando
          </span>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">View</a>
        <a href="#" className="card-footer-item">Edit</a>
        <a href="#" className="card-footer-item">Timeline</a>
      </footer>
    </div>
  )
}

export default BoxCommissionInfo
