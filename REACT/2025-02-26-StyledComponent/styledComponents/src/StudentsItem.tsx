import { useState } from "react"
import { Student } from "./StudentsForm"

type StudentsItemProps = {
    data: Student
    deleteStudent: (index: number) => void
    index: number
}

const StudentsItem: React.FC<StudentsItemProps> = (props) => {

const {deleteStudent, index} = props

const {name, surname, age, email, itKnowledge, phone, selectedType, selectedLanguages} = props.data

const [showInfo, setShowInfo] = useState(true)

const privateInfoHolder = () => setShowInfo((prevState) => !prevState)

return (
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
        <button onClick={privateInfoHolder}>{showInfo? 'Hide Private Info' : 'Show Private Info'}</button>
        <button onClick={() => deleteStudent(index)}>Ištrinti</button>

        </div>

        
    )
}

export default StudentsItem