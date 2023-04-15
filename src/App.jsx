import { useState } from 'react'
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Category from './pages/Category'
import Notfound from './components/Notfound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/*' element={<Notfound />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/category/:productCategory' element={<Category />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
