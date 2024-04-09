import { useState } from 'react'
import './App.css'
import Header from './Header'
import SideBar from './SideBar'
import Home from './Home'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle) 
  }

  return (
     <div className='grid-container'>
     <Header OpenSidebar={OpenSidebar}/>
     <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
     <Home/>
     </div>
  )
}

export default App
