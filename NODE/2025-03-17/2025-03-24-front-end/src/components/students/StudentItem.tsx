import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../API_URL"
import { Student } from "../types/TypesExport"

const StudentItem: React.FC = () => {
    const { id } = useParams()
    const [student, setStudent] = useState<Student | undefined>(undefined)
    const { name, surname, age, email, interests, city } = student || {}

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