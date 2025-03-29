import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  function handleClick(){
    alert('handle clicked')
  }

  return (


    <>
      <h1>React Core Concepts Part 2</h1>
      <button onClick={handleClick}>Click Me</button>
      
    </>
  )
}

export default App
