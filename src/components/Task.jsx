import React from 'react'

const Task = ({title,description,status}) => {
  return (
    <div>
   <p>{title}</p>
<span>{status}</span>
    </div>
  )
}

export default Task