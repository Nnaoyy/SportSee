
import Home from './pages/home'
import Horizontal from './components/nav/nav_horizontal'
import Vertical from './components/nav/nav_vertical'

import './App.css'

function App() {

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
