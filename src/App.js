//step-1
import Form from "./Form";
import React from 'react';
import Logo from './logo.jpg';


function App() {
  return (
    <div>
      <div className="logoDesign"><img src= {Logo} width="1500" height="500" alt="logo.jpg"/></div>
      <Form/>
    </div>
  )
}

export default App
