import { useState } from "react"
import StudentsForm, { Student } from "./StudentsForm"
import axios from "axios"

type StudentsItemProps = {
    data: Student
    deleteStudent: (index: number) => void
    index: number
    student: Student
    updateStudentList: (updatedStudent: Student) => void
}

const StudentsItem: React.FC<StudentsItemProps> = (props) => {

const {deleteStudent, index, student, updateStudentList} = props

const {name, surname, age, email, itKnowledge, phone, selectedType, selectedLanguages} = props.data

const [showInfo, setShowInfo] = useState(true)

const privateInfoHolder = () => setShowInfo((prevState) => !prevState)

const [isEditing, setIsEditing] = useState(false)
const editHandler = () => setIsEditing(prevState => !prevState)

const editStudentHandler = (newStudent: Student) => {
    axios.put(`http://localhost:5000/students/${student.id}`, newStudent);
    updateStudentList(newStudent)
    setIsEditing(false)
}


return (
        <div>
            {isEditing ? <StudentsForm student={student} onEditStudent={editStudentHandler}/> : (
        <div>
            <h3>{name} {surname} ({age})</h3>
            <p>Telefono numeris: {showInfo? phone : '****'}</p>
            <p>Email: {showInfo? email : '****'}</p>
            <p>IT žinios (balais): {itKnowledge}</p>
            <p>Grupė: {selectedType}</p>

            {selectedLanguages && selectedLanguages.length > 0 ? (
                <>
                <p>{selectedLanguages.length === 1 ? 'Išmokta IT kalba:' : 'Išmoktos IT kalbos: '}</p>
                {selectedLanguages.map((language, index) => (
                    <li key={index}>{language} </li>
                
                    ))}
                </>
        ) : (
            <p>Nėra jokių IT kalbų žinių</p>
        )}

        </div>
            )}
        <button onClick={privateInfoHolder}>{showInfo? 'Hide Private Info' : 'Show Private Info'}</button>
        <button onClick={editHandler}>Redaguoti</button>
        <button onClick={() => deleteStudent(index)}>Ištrinti</button>

        </div>

        
    )
}

export default StudentsItem