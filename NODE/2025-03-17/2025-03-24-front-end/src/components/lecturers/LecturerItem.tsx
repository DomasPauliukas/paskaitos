import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../API_URL"
import { Lecturer } from "../types/TypesExport"

const LecturerItem: React.FC = () => {
const { id } = useParams()
const [lecturer, setLecturer] = useState<Lecturer | undefined>(undefined)
const { firstName, lastName, department, email, office, yearsOfExperience } = lecturer || {}

useEffect(() => {
    const fetchLecturer = async () => {
        const res = await fetch(`${API_URL}/lecturers/${id}`)
        const data = await res.json()
        setLecturer(data)
    }
    fetchLecturer()
}, [id])

if (!lecturer) {
    return <p>Loading...</p>
}

    return (
        <div>
            <h1>Lecturer:</h1>

            <p>Name: {firstName}</p>
            <p>Surname: {lastName}</p>
            <p>Department: {department}</p>
            <p>Email: {email}</p>
            <p>Office: {office}</p>
            <p>Experience (years): {yearsOfExperience}</p>
        </div>
    )
}
export default LecturerItem