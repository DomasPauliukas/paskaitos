import { useState } from "react"
import StudentsForm, { Student } from "./StudentsForm"
import axios from "axios"
import styled from "styled-components"
import { API_URL } from "./API_UrL"

const StudentItemWrapper = styled.div`
    border: 3px solid lightblue;
    padding: 20px;
`


type StudentsItemProps = {
    data: Student
    deleteStudent: (index: number) => void
    index: number
    student: Student
    updateStudentList: (updatedStudent: Student) => void
}

const StudentsItem: React.FC<StudentsItemProps> = (props) => {

const {deleteStudent, index, student, updateStudentList} = props

const {name, surname, age, email, itKnowledge, phone, selectedType, selectedLanguages} = student

const [showInfo, setShowInfo] = useState(true)

const privateInfoHolder = () => setShowInfo((prevState) => !prevState)

const [isEditing, setIsEditing] = useState(false)
const editHandler = () => setIsEditing(prevState => !prevState)

const editStudentHandler = (newStudent: Student) => {
    axios.put(`${API_URL}/students/${student.id}`, newStudent);
    updateStudentList(newStudent)
    setIsEditing(false)
}

// const studentItemWrapper = styled.div`
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
// `



return (
        <StudentItemWrapper>
            {isEditing ? (<StudentsForm student={student} onEditStudent={editStudentHandler}/>) : (
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

        </StudentItemWrapper>

        
    )
}

export default StudentsItem