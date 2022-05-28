import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    let mystyle={
        minHeight:"50vh",
        marginTop:"2%"
    }
  return (
    <div className='container' style={mystyle}>
        {
            props.todos.length===0?"No Todo to show":
            props.todos.map((todo)=>
            { 
                return (
                    <>
                    <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                    <hr/>
                    </>
                )
                
                
            })
        }
        
    </div>
  )
}
