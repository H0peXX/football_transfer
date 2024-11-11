import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <Login />
      </div>
      <p className="read-the-docs">
      Welcome to Football World
      </p>
    </>
  )
}

export default App
