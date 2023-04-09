import { useState } from 'react'
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Homepage />
    </>
  )
}

export default App
