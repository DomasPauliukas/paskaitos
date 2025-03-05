import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChuckReducerPage from './Chuck-API-REDUCER/ChuckReducerPage.tsx'
import GradesPage from './counter-REDUCER-CONTEXT/GradesPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<App/>}/>

        <Route path='reducer'>
          <Route index element={<ChuckReducerPage/>}/>
        </Route>

        <Route path='context'>
          <Route index element={<GradesPage/>}/>
        </Route>
        
      </Routes>
    
    </BrowserRouter>
  </StrictMode>,
)
