import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css';

function App() {

  //const [color, setColor] = useState("red")
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [color, setColor] = useState("red")



  let passwordref = useRef(null)


  let passwordgenerator = useCallback(() => {
    let pass = ""
    let Str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) Str += "0123456789"
    if (characterAllowed) Str += "!@#$%^&*()"

    for (let i = 1; i <= length; i++) {
      let j = Math.floor(Math.random() * Str.length)
      pass += Str.charAt(j);
    }
    setPassword(pass)

  }, [length, setPassword, numberAllowed, characterAllowed])
  useEffect(() => {
    passwordgenerator();
  }, [length, numberAllowed, characterAllowed])



  const copyToClipBoard = useCallback(() => {
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <div className='full-body' style={{ backgroundColor: color }}>
      <div className='complete'>
        <h1>PassWord Generator</h1>
      </div>
      <div className='btn'>
        <input className='in'
          type='text'
          value={password}
          ref={passwordref}
        ></input>
        <span><button onClick={copyToClipBoard} className='b' >copy</button></span>
      </div>
      <div className='second-label'>
        <input
          type='range'
          min={6}
          max={100}
          onChange={(e) => setLength(() => e.target.value)}
          value={length}>
        </input>
        <span className='len' style={{ fontWeight: 'bold' }}>Length : {length}</span>
        <span ><input type='checkBox'
          style={{ marginLeft: '15px' }}
          defaultChecked={numberAllowed}
          onClick={() => { setNumberAllowed((prev) => !prev) }}
        ></input></span>
        <label htmlFor="NumberFormat"
          style={{ fontWeight: 'bold', marginLeft: '10px' }}>Number
        </label >
        <span ><input type='checkBox'
          style={{ marginLeft: '15px' }}
          defaultChecked={characterAllowed}
          onClick={() => { setCharacterAllowed((prev) => !prev) }}>
        </input>
        </span>
        <label htmlFor="CharacterFormat"
          style={{ fontWeight: 'bold', marginLeft: '10px' }}>Character
        </label>
      </div >
      <div className="back-color" >
        <button onClick={() => setColor("red")} style={{ backgroundColor: 'red' }}>red</button>
        <button onClick={() => setColor("blue")} style={{ backgroundColor: 'blue' }}>blue</button>
        <button onClick={() => setColor("green")} style={{ backgroundColor: 'green' }}>green</button>
        <button onClick={() => setColor("yellow")} style={{ backgroundColor: 'yellow' }}>yellow</button>
        <button onClick={() => setColor("silver")} style={{ backgroundColor: 'silver' }}>silver</button>
        <button onClick={() => setColor("maroon")} style={{ backgroundColor: 'maroon' }}>maroon</button>
        <button onClick={() => setColor("aqua")} style={{ backgroundColor: 'aqua' }}>aqua</button>
        <button onClick={() => setColor("teal")} style={{ backgroundColor: 'teal' }}>teal</button>
        <button onClick={() => setColor("gold")} style={{ backgroundColor: 'gold' }}>gold</button>
      </div>
    </div>
  );
}

export default App;
