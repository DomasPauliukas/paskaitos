import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Testimonials from './pages/Testimonials.jsx'
import NaujienosPage from './pages/NaujienosPage.jsx'
import JobListingPage from './pages/JobListingPage.jsx'
// import TitlePage from './pages/TitlePage/TitlePage.jsx'
import App from './App.jsx'
import DessertsMenu from './pages/DessertsMenu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App/>}/>
        <Route path='Testimonial' element={<Testimonials/>}/>
        <Route path='Naujienos' element={<NaujienosPage/>}/>
        <Route path='JobListing' element={<JobListingPage/>}/>
        <Route path='DessertsMenu' element={<DessertsMenu/>}/>
          
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
