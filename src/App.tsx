import './App.css'
import './styles.css'

// import { AiFillFire } from "react-icons/ai";

import { NavBar } from './components/NavBar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="about" element={<h1>about</h1>} />
        <Route path="services" element={<h1>services</h1>} />
        <Route path="contact" element={<h1>contact</h1>} />
      </Routes>
    </div>
  )
}

export default App
