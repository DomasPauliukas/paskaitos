import { useParams } from "react-router-dom"
import StudentForm from "./StudentForm"
import { useEffect, useState } from "react"
import { API_URL } from "../API_URL"

const EditStudent: React.FC = () => {
    const { id } = useParams()
    const [student, setStudent] = useState()

    useEffect(() => {
        const fetchStudent = async () => {
        const res = await fetch(`${API_URL}/students/${id}`)
        const data = await res.json()
        setStudent(data)
        }
        fetchStudent()
    }, [id])

    if (!student) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>Edit Student</h1>
            <StudentForm editStudentData={student}/>
        </div>
    )
}
export default EditStudent