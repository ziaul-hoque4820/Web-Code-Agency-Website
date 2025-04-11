import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import './App.css'
import App from './App.jsx'
import Home from './pages/home/Home.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Pricing from './pages/home/Pricing.jsx';
import Services from './pages/home/Services.jsx';
import Blogs from './pages/blogs/Blogs.jsx';
import Register from './components/Register.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        {/* main layout */}
        <Route index path="/" element={<Home />} />
        <Route index path="/pricing" element={<Pricing />} />
        <Route index path="/services" element={<Services />} />
        <Route index path="/blogs" element={<Blogs />} />

        {/* error Page */}
        <Route path='*' element={<ErrorPage />} />

        {/* authentication */}
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<div>Login Page</div>} />
      </Route>
    </Routes>


  </BrowserRouter>,
)
