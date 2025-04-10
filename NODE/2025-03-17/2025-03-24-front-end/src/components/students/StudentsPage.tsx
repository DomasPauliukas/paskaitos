import { useEffect, useState } from "react"
import { API_URL } from "../API_URL"
import { Link } from "react-router-dom"
import { Student } from "../types/TypesExport"
import api from "../../api"

const StudentsPage: React.FC = () => {

    const [students, setStudents] = useState<Student[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                // Pries interseptor
                // const token = localStorage.getItem('token')

                // const res = await fetch(`${API_URL}/students`, {
                //     method: "GET",
                //     headers: {
                //         Authorization: `Bearer ${token}`
                //     }
                // })
                // const data = await res.json()

                // Po interseptor (api.js)

                const { data } = await api.get(`/students`)
                setStudents(data)

            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchStudents()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            <h1>Students page</h1>
 
            <Link to={'/Create-student'}>Add student</Link>

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