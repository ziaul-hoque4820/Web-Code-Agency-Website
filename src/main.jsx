import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route index path="/" element={<div>Home</div>} />
        <Route index path="/pricing" element={<div>Pricing Page</div>} />
        <Route index path="/services" element={<div>Service Page</div>} />
        <Route index path="/blogs" element={<div>Blogs page</div>} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
