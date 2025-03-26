import { useEffect, useState } from "react"
import { API_URL } from "../API_URL"
import { Link } from "react-router-dom"
import { Lecturer } from "../types/TypesExport"

const LecturersPage = () => {
    const [lecturers, setLecturer] = useState<Lecturer[]>([])

    useEffect(() => {
        const fetchLecturers = async () => {
            const res = await fetch(`${API_URL}/lecturers`)
            const data = await res.json()
            setLecturer(data)
        }
        fetchLecturers()
    }, [])
    return (
        <div>
            <h1>Lecturers page</h1>

            {lecturers && lecturers.length > 0 ? (
                <div>
                    <h2>{lecturers.length > 1 ? 'Lecturers:' : 'Lecturer:'}</h2>

                    <ul>
                        {lecturers.map((lecturer, index) => (
                            <li key={index}>
                                <Link to={`/Lecturers/${lecturer.id}`}>{lecturer.firstName} {lecturer.lastName}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No lecturers yet...</p>
            )}
        </div>
    )
}

export default LecturersPage