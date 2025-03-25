import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import StudentsPage from "./components/students/StudentsPage"
import LecturersPage from "./components/lecturers/LecturersPage"
import GroupsPage from "./components/groups/GroupsPage"
import LanguagesPage from "./components/languages/LanguagesPage"
import SubjectsPage from "./components/subjects/SubjectsPage"
import PageNavigator from "./components/pageNavigator/PageNavigator"
import StudentItem from "./components/students/StudentItem"
import CreateStudent from "./components/students/CreateStudent"

function App() {

  return (
    <>
      <BrowserRouter>
      <PageNavigator />
        <Routes>

          <Route index element={<HomePage/>} />

          <Route path="Students" element={<StudentsPage />}/>
          <Route path="Students/:id" element={<StudentItem />}/>
          <Route path="Create-student" element={<CreateStudent />}/>


          <Route path="Lecturers" element={<LecturersPage />}/>


          <Route path="Groups" element={<GroupsPage />}/>


          <Route path="Languages" element={<LanguagesPage />}/>


          <Route path="Subjects" element={<SubjectsPage />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
