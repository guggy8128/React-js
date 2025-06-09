import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (

      <body
      className='w-full h-screen duration-200'
      style={{backgroundColor: color}}
      >
          <div className='fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2'>
          
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-none rounded-xl px-3 py2'>
              <button className='outline-none px-4 text-white shadow-lg py-1 rounded '
              style={{backgroundColor: 'red'}}
              onClick={() => setColor("red")}
              >
                
                Red
              </button>
              <button className='outline-none px-4 text-white shadow-lg py-1 rounded '
              style={{backgroundColor: 'green'}}
              onClick={() => setColor("green")}
              >
                Green
              </button>
                <button className='outline-none px-4 text-white shadow-lg py-1 rounded '
              style={{backgroundColor: 'blue'}}
              onClick={() => setColor("blue")}
              >
                Blue
              </button>
              <button className='outline-none px-4 text-white shadow-lg py-1 rounded '
              style={{backgroundColor: 'yellow'}}
              onClick={() => setColor("yellow")}
              >
                Yellow
              </button>
              <button className='outline-none px-4 text-white shadow-lg py-1 rounded '
              style={{backgroundColor: 'purple'}}
              onClick={() => setColor("purple")}
              >
                Purple
              </button>
                <button className='outline-none px-4 text-white shadow-lg py-1 rounded '
              style={{backgroundColor: 'pink'}}
              onClick={() => setColor("pink")}
              >
                Pink
              </button>




              
              </div>

          </div>
      </body>
      
 
  )
}

export default App
