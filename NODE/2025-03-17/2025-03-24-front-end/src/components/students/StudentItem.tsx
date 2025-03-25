import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { API_URL } from "../API_URL"
import { Student } from "../types/TypesExport"
import axios from "axios"

const StudentItem: React.FC = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [student, setStudent] = useState<Student | undefined>(undefined)
    const { name, surname, age, email, interests, city } = student || {}

    const deleteStudent = async (id: string) => {
        const response = await axios.delete(`${API_URL}/students/${id}`)
        navigate('/Students')
    }

    useEffect(() => {
        const fetchStudent = async () => {
            const res = await fetch(`${API_URL}/students/${id}`)
            const data = await res.json()

            setStudent(data)
        }
        fetchStudent()
    }, [id])

    if (!student) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Student:</h1>
            <Link to={`/Edit-student/${id}`}>Edit</Link>
            <button onClick={() => deleteStudent(id ?? '')}>Delete</button>

            <p>Name: {name}</p>
            <p>Surname: {surname}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Email: {email}</p>

            {interests && interests.length > 0 ? (
                <div>
                    <h6>{interests.length > 1 ? 'Interests:' : 'Interest:'}</h6>
                    {interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                </div>

            ) : (
                <p>No interests...</p>
            )}
        </div>
    )
}

export default StudentItem