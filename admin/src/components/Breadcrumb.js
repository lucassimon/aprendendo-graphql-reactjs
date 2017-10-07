import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


const Breadcrumb = ({ items }) => {

  const links = items.map((item, index)=>{
    return (
      <li
        key={item.url}
        className={"" + (item.active ? 'is-active' : '')}
      >
        <NavLink
          key={index}
          to={item.url}

        >
          {item.name}
        </NavLink>
      </li>
    )
  })

  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        {links}
      </ul>
    </nav>
  )
}

export default Breadcrumb
