import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // we will create a state to store the value of count
  // counterValue is variable and setcount is method to update the value of counterValue
  // whenever there update in counterVlaue , all the places in the code where counterValue is used will be updated

  const [counterValue, setCount] = useState(10)

  // now we will create a function to increase the value of count
  const increase = () => {
    setCount(counterValue + 1)
  }

  // now we will create a function to decrease the value of count
  const decrease = () => {
    setCount(counterValue - 1)
  }   
  return (
    <>
      <h1> React Counter Application using UseStateHook {counterValue}</h1>
      <h2> Count {counterValue}</h2>
      <button onClick={increase}> Add Value</button>{"          "}
      <button onClick={decrease}> Remove Value</button>
      
    </>
  )
}

export default App
