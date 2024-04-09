import './App.css';
import { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(0)
  let add = () => {
    setCounter(counter + 1)

  }
  let sub = () => {
    if (counter < 1) {
      alert('value cannot go below 0')
      setCounter(counter = 0);
    }
    else {
      setCounter(counter - 1);
    }
  }
  return (
    <div className='rt1'>
      <h1>{counter}</h1>
      <button onClick={add} className='btn1'>Increment</button>
      <button onClick={sub} className='btn2'>Decrement</button>
    </div>

  );
}

export default App;
