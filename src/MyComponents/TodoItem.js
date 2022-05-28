import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <div>
      <h5>
        {todo.job}
      </h5>
      <h6>
        {todo.desc}
      </h6>
      <button className='btn btn-danger btn-sm' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
