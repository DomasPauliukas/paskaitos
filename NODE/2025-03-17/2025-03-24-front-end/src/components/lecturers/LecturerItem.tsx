import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { API_URL } from "../API_URL"
import { Group, Lecturer, Subject } from "../types/TypesExport"
import axios from "axios"

const LecturerItem: React.FC = () => {
const navigate = useNavigate()
const { id } = useParams()
const [lecturer, setLecturer] = useState<Lecturer | undefined>(undefined)
const [subjects, setSubjects] = useState<Subject[]>([]);
const [groups, setGroups] = useState<Group[]>([]);
const { firstName, lastName, department, email, office, yearsOfExperience } = lecturer || {}

const deleteLecturer = async (id: string) => {
  const response = await axios.delete(`${API_URL}/lecturers/${id}`)
  navigate('/Lecturers')
}

useEffect(() => {
    const fetchLecturerData = async () => {
        const res = await fetch(`${API_URL}/lecturers/${id}`)
        const data = await res.json()
        setLecturer(data)

        const subjectsResponse = await fetch(`${API_URL}/subjects`)
        const subjects = await subjectsResponse.json()
        setSubjects(subjects)
        
        const groupsResponse = await fetch(`${API_URL}/groups`)
        const groups = await groupsResponse.json()
        setGroups(groups)
    }
    fetchLecturerData()
}, [id])

if (!lecturer) {
    return <p>Loading...</p>
}

const lecturerSubjects = subjects.filter(subject =>
    lecturer.subjects.includes(subject.id)
  )

  const lecturerGroups = groups.filter(group =>
    lecturer.groups.includes(group.id)
  )

    return (
        <div>
            <h1>Lecturer:</h1>
            <Link to={`/Edit-lecturer/${id}`}>Edit</Link>
            <button onClick={() => deleteLecturer(id ?? '')}>Delete</button>


            <p>Name: {firstName}</p>
            <p>Surname: {lastName}</p>
            <p>Department: {department}</p>
            <p>Email: {email}</p>
            <p>Office: {office}</p>
            <p>Experience (years): {yearsOfExperience}</p>

            <h3>Subjects:</h3>
      <ul>
        {lecturerSubjects.length > 0 ? (
          lecturerSubjects.map(subject => (
            <li key={subject.id}>{subject.subject}</li>
          ))
        ) : (
          <p>No subjects assigned</p>
        )}
      </ul>

      <h3>Groups:</h3>
      <ul>
        {lecturerGroups.length > 0 ? (
          lecturerGroups.map(group => (
            <li key={group.id}>{group.name}</li>
          ))
        ) : (
          <p>No groups assigned</p>
        )}
      </ul>
        </div>
    )
}
export default LecturerItem