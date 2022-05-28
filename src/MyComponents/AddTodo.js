import React from 'react'
import {useState} from 'react'
export const AddTodo = ({addTodo}) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc)
        alert("Title or Description can not be blank!");
        else
        addTodo(title,desc);
        setDesc("");
        setTitle("");
    }
    
  return (
      <form className='container' onSubmit={submit}>
        <h4>Add a Todo</h4>
        <div className="mb-3">
            <label htmlFor="title">Todo Title</label>
            <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" placeholder="Title"/>
        </div>
        <div className="mb-3">
            <label htmlFor="desc">Description</label>
            <input type="text" className="form-control" value={desc} id="desc" onChange={(e)=>{setDesc(e.target.value)}} placeholder="Description"/>
        </div>
        <button type="submit" className="btn btn-sm btn-success">Add</button>
    </form>
  )
}
