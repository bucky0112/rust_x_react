import { useState } from 'react'
import init, { calculator, fibonacci } from 'wasm-lib'
import logo from './logo.svg'
import './App.css'

const calFibonacci = (n) => {
  if (n <= 1) {
    return n
  } else {
    return calFibonacci(n - 1) + calFibonacci(n - 2)
  }
}

function App() {
  const [num, setNum] = useState(0)
  const [fibonacciNum, setFibonacciNum] = useState(0)
  const [fibonacciNumJS, setFibonacciNumJS] = useState(0)
  const [inputNum, setInputNum] = useState(0)

  const handlePlus = () => {
    init().then(() => {
      setNum(calculator(num, 1))
    })
  }

  const handleMinus = () => {
    init().then(() => {
      setNum(calculator(num, -1))
    })
  }

  const handleFibonacci = () => {
    let start = new Date().getTime()
    init().then(() => {
      setFibonacciNum(fibonacci(inputNum))
    })
    let end = new Date().getTime()
    console.log(`Rust: 時間： ${end - start} ms`)
  }

  const handleFibonacciJS = () => {
    let start = new Date().getTime()
    let result = calFibonacci(inputNum)
    setFibonacciNumJS(result)
    let end = new Date().getTime()
    console.log(`JS: 時間： ${end - start} ms`)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{num}</p>
        <div className='calc'>
          <button onClick={handlePlus}>+</button>
          <button onClick={handleMinus}>-</button>
        </div>
        <input
          value={inputNum}
          onChange={(e) => setInputNum(e.target.value)}
          className='inputValue'
        />
        <div className='fibonacciBtn'>
          <div>
            <button onClick={handleFibonacci}>fibonacci</button>
            <p>{fibonacciNum}</p>
          </div>
          <div>
            <button onClick={handleFibonacciJS}>fibonacciJS</button>
            <p>{fibonacciNumJS}</p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
