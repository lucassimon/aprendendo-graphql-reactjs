import React from 'react'

const BoxSearchCountItems = ({count, name}) => {
  return (
    <div className="column is-half">
      <h4 className='title is-4'>
        Total of {count} {name}
      </h4>
    </div>
  )
}

export default BoxSearchCountItems
