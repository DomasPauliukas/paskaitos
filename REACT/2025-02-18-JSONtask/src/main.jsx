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
import AlbumItem from './components/Album/AlbumItem.jsx'
import CommentsItem from './components/Comments/CommentsItem.jsx'
import PostsItem from './components/Posts/PostsItem.jsx'
import TodosItem from './components/Todos/TodosItem.jsx'
import UsersItem from './components/Users/UsersItem.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='Albums' element={<AlbumPage/>} />
      <Route path='Albums/:id' element={<AlbumItem/>} />

      <Route path='Comments' element={<CommentsPage/>} />
      <Route path='Comments/:id' element={<CommentsItem/>} />

      <Route path='Posts' element={<PostsPage/>} />
      <Route path='Posts/:id' element={<PostsItem/>} />

      <Route path='Todos' element={<TodosPage/>} />
      <Route path='Todos/:id' element={<TodosItem/>} />
      
      <Route path='Users' element={<UsersPage/>} />
      <Route path='Users/:id' element={<UsersItem/>} />
    </Routes>
   </BrowserRouter>

    
  </StrictMode>,
)
