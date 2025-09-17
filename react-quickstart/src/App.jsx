import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Welcome</h1>
      <MyButton />
    </div>
  )
}

export default App
