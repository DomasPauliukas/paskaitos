import { Student } from "./StudentsForm"

type StudentsItemProps = {
    data: Student
    deleteStudent: (index: number) => void
    index: number
}

const StudentsItem: React.FC<StudentsItemProps> = (props) => {

const {deleteStudent, index} = props

const {name, surname, age, email, itKnowledge, phone, selectedType, selectedLanguages} = props.data


return (
        <div>

        <h3>{name} {surname} ({age})</h3>
        <p>Telefono numeris: {phone}</p>
        <p>Email: {email}</p>
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

        <button onClick={() => deleteStudent(index)}>Ištrinti</button>

        </div>

        
    )
}

export default StudentsItem