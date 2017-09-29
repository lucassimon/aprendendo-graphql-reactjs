import React from 'react'

const BoxSearchCountItems = ({count, name}) => {
  return (
    <div className="column is-three-quarters">
      <h4 className='title is-4'>
        Total de {count} {name}
      </h4>
    </div>
  )
}

export default BoxSearchCountItems
