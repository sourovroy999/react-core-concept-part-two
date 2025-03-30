import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {



  
  function handleClick(){
    alert('Button clicked')
  }

  const handleClick2=()=>{
    alert('button 2 clicked')
  }

  const addToFive=(num)=>{
    alert(num+5)
  }

  // we can return function-->
//   function useState(num) {
//     function updateNum(value) {
//         num=value;
//     }return[num, updateNum]
// }
// const[count, setCount]=useState(6)


  return (


    <>
      <h1>React Core Concepts Part 2</h1>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click2</button>

      
      <button onClick={()=>alert('Third clicked')}>click3</button>
      
      {/* parameter thakle arrow function use korbo */}
      <button onClick={()=> addToFive(9)}>Four</button>
    </>
  )
}

export default App
