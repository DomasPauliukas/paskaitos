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
import EditStudent from "./components/students/EditStudent"
import LecturerItem from "./components/lecturers/LecturerItem"
import CreateLecturer from "./components/lecturers/CreateLecturer"
import EditLecturer from "./components/lecturers/EditLecturer"
import LoginPage from "./components/login/LoginPage"
import RegisterPage from "./components/register/RegisterPage"
import ProfilePage from "./components/profile/ProfilePage"
import PrivateRoute from "./components/privateRoute/PrivateRoute"
import DashboardPage from "./components/dashboard/DashboardPage"
import SettingsPage from "./components/settings/SettingsPage"
import { useAuth } from "./AuthContext"
import AdminDashboardPage from "./components/admin/AdminDashboardPage"

function App() {
  const { user } = useAuth()
  return (
    <>
      <BrowserRouter>
      <PageNavigator />
        <Routes>

          <Route index element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />}/>

          <Route path="Students" element={<StudentsPage />}/>
          <Route path="Students/:id" element={<StudentItem />}/>
        {user && (
          <>
            <Route path="Create-student" element={<CreateStudent />}/>
            <Route path="Edit-student/:id" element={<EditStudent />}/>
          </>
        )}


          <Route path="Lecturers" element={<LecturersPage />}/>
          <Route path="Lecturers/:id" element={<LecturerItem />}/>
          <Route path="Create-lecturer" element={<CreateLecturer />}/>
          <Route path="Edit-lecturer/:id" element={<EditLecturer />}/>


          <Route path="Groups" element={<GroupsPage />}/>


          <Route path="Languages" element={<LanguagesPage />}/>


          <Route path="Subjects" element={<SubjectsPage />}/>

        <Route element={<PrivateRoute/>}>
          <Route path="dashboard">
            <Route index element={<DashboardPage/>}/>
            <Route path="profile" element={<ProfilePage />}/>
            <Route path="settings" element={<SettingsPage/>} />
            <Route path="admin" element={<AdminDashboardPage/>} />
          </Route>
        </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
