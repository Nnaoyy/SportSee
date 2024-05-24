import { useState } from 'react'
import Home from './pages/home'
import Horizontal from './components/nav/nav_horizontal'
import Vertical from './components/nav/nav_vertical'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Horizontal/>
      <div className='screen'>
        <Vertical/>
        <Home/>
      </div>
      
    </>
  )
}

export default App
