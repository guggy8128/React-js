import { useState, useCallback, useEffect, useRef } from 'react'



function App() {

  const [length, setLength] = useState(8)

  const [numAllowed, setNumAllowed] = useState(false)

  const [charAllowed, setCharAllowed] = useState(false)

  const [password, setPassword] = useState('')

  // useRef hook 
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {

    let pass = '';

    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numAllowed) str += '0123456789';

    if (charAllowed) str += '!@#$%^&*()_+[]{}|;:,.<>?';

    for (let i = 1; i <= length; i++) {

      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);

    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed,setPassword])



  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100); 
    window.navigator.clipboard.writeText(password)

    const effect = document.getElementById('copyBtn');
    if (effect) {
      effect.classList.add('animate-ping');
      setTimeout(() => {
        effect.classList.remove('animate-ping');
      }, 1000);
    }

  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed,passwordGenerator])


  return (
    
        <div className='w-full max-w-md  mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
          <h1 className='font-mono text-xs text-white text-center my-3'>
            Password Generator
          </h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
            <input 
            type="text" 
            value={password}
            className='outline-none py-1 px-3 w-full'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            />
            
            <button onClick={copyPasswordToClipBoard} id='copyBtn' className='outline-none bg-blue-700 text-black px-3 py-0.5 shring-0 '>copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flx items-center gap-x-1'>
                <input type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => setLength(e.target.value)}
                 />
                 <label>
                  Length: {length}
                 </label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                defaultChecked={numAllowed}
                id='numberInput'
                onChange={() => {
                  
                  setNumAllowed((prev) => !prev)
                }} />
                <label htmlFor='numberInput'>Include Numbers</label>
            </div>


            <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                defaultChecked={charAllowed}
                id='characterInput'
                onChange={() => {
                  
                  setCharAllowed((prev) => !prev)
                }} />
                <label htmlFor='characterInput'>character Numbers</label>
            </div>
          </div>
        </div>
    
  )
}

export default App
