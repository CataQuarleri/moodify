import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainMoodForm from './components/Main/MainMoodForm'
import MainListPost from './components/Main/MainListPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainListPost />
    <MainMoodForm />
    </>
  )
}

export default App
