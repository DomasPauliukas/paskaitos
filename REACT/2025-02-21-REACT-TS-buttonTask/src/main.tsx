import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'

// import TitlePage from './pages/TitlePage/TitlePage.jsx'
import App from './App.jsx'

import ButtonTask from './pages/EventListeners/ButtonTask/ButtonTask.js'
import CitiesPage from './pages/EventListeners/Cities/CitiesPage.js'
import CarsPage from './pages/EventListeners/Cars/CarsPage.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='events'>
          <Route index element={<h1>EventListeners darbai</h1>}/>      
          <Route path='ButtonTask' element={<ButtonTask/>} />
          <Route path='CitiesPage' element={<CitiesPage/>}/>
          <Route path='CarsPage' element={<CarsPage/>} />
        </Route>

          
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)