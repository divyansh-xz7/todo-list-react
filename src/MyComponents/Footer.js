import React from 'react'
export const Footer = () => {
  let footerstyle={
    position: "relative",
    width: "90%",
    marginTop:"1%",
    marginBottom:"1%",
    padding: "0.5% 0 0.075% 0"
  };
  return (
    <footer className='bg-dark text-light mx-5' style={footerstyle}>
      <p className='text-center'>
        Copyright &copy; MyTodoList.com
      </p>
    </footer>
  )
}
