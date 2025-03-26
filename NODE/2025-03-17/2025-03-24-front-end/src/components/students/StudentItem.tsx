import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { API_URL } from "../API_URL"
import { Group, Student } from "../types/TypesExport"
import axios from "axios"

const StudentItem: React.FC = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [student, setStudent] = useState<Student | undefined>(undefined)
    const [groups, setGroups] = useState<Group[]>([])
    const [groupName, setGroupName] = useState<string>('')

    const { name, surname, age, email, interests, city, groupId, languages } = student || {}

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
        const fetchGroups = async () => {
            const res = await fetch(`${API_URL}/groups`)
            const data = await res.json()
            setGroups(data)
        }

        fetchStudent()
        fetchGroups()
    }, [id])

    useEffect(() => {
        if (groupId && groups.length > 0) {
            const group = groups.find(group => group.id === groupId)
            if (group) {
                setGroupName(group.name)
            }
        }
    }, [groupId, groups])

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
            <p>Group: {groupName ? groupName : 'No group assigned!'}</p>

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

            {languages && languages.length > 0 ? (
                <div>
                    <h6>Languages:</h6>
                    <ul>
                        {languages.map((language, index) => (
                            <li key={index}>{language}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No languages assigned...</p>
            )}
        </div>
    )
}

export default StudentItem