import { ToastContainer } from 'react-toastify'
import './App.css'
import StudentsPage from './StudentsPage'

function App() {

  return (
    <>
      <StudentsPage/>
      <ToastContainer
      position="bottom-center"
      autoClose={2000}/>
    </>
  )
}

export default App
