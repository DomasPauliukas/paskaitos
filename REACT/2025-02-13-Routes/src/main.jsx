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
import EventListenersPage from './pages/EventListeners/EventListenersPage.jsx'
import ButtonTask from './pages/EventListeners/ButtonTask/ButtonTask.jsx'
import CitiesPage from './pages/EventListeners/Cities/CitiesPage.jsx'
import CarsPage from './pages/EventListeners/Cars/CarsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App/>}/>
        <Route path='Testimonial' element={<Testimonials/>}/>
        <Route path='Naujienos' element={<NaujienosPage/>}/>
        <Route path='JobListing' element={<JobListingPage/>}/>
        <Route path='DessertsMenu' element={<DessertsMenu/>}/>

        <Route path='events'>
          <Route index element={<h1>EventListeners darbai</h1>}/>      
          <Route path='EventListenersPage' element={<EventListenersPage/>}/>
          <Route path='ButtonTask' element={<ButtonTask/>} />
          <Route path='CitiesPage' element={<CitiesPage/>}/>
          <Route path='CarsPage' element={<CarsPage/>} />
        </Route>

          
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
