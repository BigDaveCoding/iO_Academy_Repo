import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CLI_Notes from './cli'
import Git from './git'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CLI_Notes />
      <Git />
    </>
  )
}

export default App
