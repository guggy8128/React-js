import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  
  let myObj = {
    username: "Dharmesh",
    age: 21
  }
  let newArr = [1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>


      
      <Card username="codewithd00" btnText="Click here" />  
      <Card username="Dharmesh" />  

    </>
  )
}

export default App
