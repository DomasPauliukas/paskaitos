import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AlbumPage from './components/Album/AlbumPage.jsx'
import CommentsPage from './components/Comments/CommentsPage.jsx'
import PostsPage from './components/Posts/PostsPage.jsx'
import TodosPage from './components/Todos/TodosPage.jsx'
import UsersPage from './components/Users/UsersPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='Albums' element={<AlbumPage/>} />
      <Route path='Comments' element={<CommentsPage/>} />
      <Route path='Posts' element={<PostsPage/>} />
      <Route path='Todos' element={<TodosPage/>} />
      <Route path='Users' element={<UsersPage/>} />
    </Routes>
   </BrowserRouter>

    
  </StrictMode>,
)
