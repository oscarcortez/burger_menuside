import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="about" element={<h1>about</h1>} />
        <Route path="services" element={<h1>services</h1>} />
        <Route path="contact" element={<h1>contact</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
