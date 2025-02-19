import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AlbumPage from './components/Album/AlbumPage.jsx'
import CommentsPage from './components/Comments/CommentsPage.jsx'
import PostsPage from './components/Posts/PostsPage.jsx'
import UsersPage from './components/Users/UsersPage.jsx'
import AlbumItem from './components/Album/AlbumItem.jsx'
import CommentsItem from './components/Comments/CommentsItem.jsx'
import PostsItem from './components/Posts/PostsItem.jsx'
import UsersItem from './components/Users/UsersItem.jsx'
import CreateAlbum from './components/Album/CreateAlbum.jsx'
import CreateComment from './components/Comments/CreateComment.jsx'
import CreatePost from './components/Posts/CreatePost.jsx'
import CreateUser from './components/Users/CreateUser.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='Albums' element={<AlbumPage/>} />
      <Route path='Albums/:id' element={<AlbumItem/>} />
      <Route path='Albums/create' element={<CreateAlbum/>} />

      <Route path='Comments' element={<CommentsPage/>} />
      <Route path='Comments/:id' element={<CommentsItem/>} />
      <Route path='Comments/create/:id' element={<CreateComment/>} />

      <Route path='Posts' element={<PostsPage/>} />
      <Route path='Posts/:id' element={<PostsItem/>} />
      <Route path='Posts/create' element={<CreatePost/>} />
      
      {/* <Route path='Users' element={<UsersPage/>} />
      <Route path='Users/:id' element={<UsersItem/>} />
      <Route path='Users/create' element={<CreateUser/>} /> */}

      <Route path='Users'>
        <Route index element={<UsersPage/>} />
        <Route path=':id' element={<UsersItem/>} />
        <Route path='create' element={<CreateUser/>} />
      </Route>


    </Routes>
   </BrowserRouter>

    
  </StrictMode>,
)
