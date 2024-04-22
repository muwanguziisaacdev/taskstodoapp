import React from 'react'

const FOOTER = ( {tasks}) => {
  const taskLength = tasks.length
  return (
    <footer>
        <h2>{taskLength} {taskLength> 1?'Items': "Item"}</h2>
    </footer>
  )
}

export default FOOTER