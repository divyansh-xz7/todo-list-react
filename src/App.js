
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import React,{useState,useEffect} from 'react';
import { About } from './MyComponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  let initTodo;

  if (localStorage.getItem("todos")===null)
  initTodo=[];
  else
  initTodo=JSON.parse(localStorage.getItem("todos"));

  let [tasks,setTasks]=useState(initTodo);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(tasks));
  },[tasks]);

  const onDelete=(todo)=>{
    console.log("i am ondelete",todo);
    setTasks(tasks.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(tasks));
  }

  

  const addTodo=(title,desc)=>{
    let sno=0;
    if(tasks.length!==0)
    sno=tasks[tasks.length-1].sno+1;
    const mytodo={
      sno:sno,
      job:title,
      desc:desc
    };
    setTasks([...tasks,mytodo]);
  }

  function Home(){
    return(
      <>
        <AddTodo addTodo={addTodo}/>
        <Todos todos={tasks} onDelete={onDelete}/>
      </>
    )
  }


  return (
    <>
    <Router>
    <Header title='My Todo List'/>
    <Routes>
      <Route path='' element={<Home/>} />
      <Route exact path='/about' element={<About/>}/>
      
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
