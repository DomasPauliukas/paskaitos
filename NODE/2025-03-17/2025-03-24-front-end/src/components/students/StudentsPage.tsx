import { useEffect, useState } from "react"
import { API_URL } from "../API_URL"
import { Link } from "react-router-dom"
import { Student } from "../types/TypesExport"

const StudentsPage: React.FC = () => {

    const token = localStorage.getItem('token')

    const [students, setStudents] = useState<Student[]>([])

    useEffect(() => {
        const fetchStudents = async () => {
            const res = await fetch(`${API_URL}/students`)
            const data = await res.json()
            setStudents(data)
        }
        fetchStudents()
    }, [])

    return (
        <div>
            <h1>Students page</h1>

            {token && 
            <Link to={'/Create-student'}>Add student</Link>
            }

            {students && students.length > 0 ? (
                <div>
                    <h2>{students.length > 1 ? 'Students:' : 'Student:'}</h2>
                    <ul>
                        {students.map((student) => (
                            <li key={student._id}>
                                <Link to={`/Students/${student._id}`}>
                                {student.name} {student.surname}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No students yet</p>
            )} 
        </div>
    )
}

export default StudentsPage