import { useState } from 'react'
import Home from './home/Home'
import './App.css'
import NavBar from './components/navbar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    </>
  )
}

export default App
