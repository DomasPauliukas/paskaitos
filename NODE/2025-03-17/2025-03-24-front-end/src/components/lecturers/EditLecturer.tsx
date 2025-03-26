import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../API_URL"
import { Lecturer } from "../types/TypesExport"
import LecturerForm from "./LecturerForm"

const EditLecturer: React.FC = () => {
    const { id } = useParams()
    const [lecturer, setLecturer] = useState<Lecturer>()

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
            <h1>Edit lecturer</h1>
            <LecturerForm editLecturerData={lecturer}/>
        </div>
    )
}
export default EditLecturer