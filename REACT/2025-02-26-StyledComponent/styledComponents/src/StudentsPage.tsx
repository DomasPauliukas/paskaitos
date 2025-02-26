import { useState } from "react"
import StudentsForm, { Student } from "./StudentsForm"
import StudentsItem from "./StudentsItem"

const StudentsPage: React.FC = () => {

const [studentList, setstudentList] = useState<Student[]>([])

const setNewStudentHandler = (newStudent: Student) => {
    setstudentList((prevState) => [newStudent, ...prevState])
}
const deleteStudent = (index: number) => {setstudentList((prevList) => prevList.filter((_, i) => i !== index))}


    return (
        <div>
            <h1>Studento forma: </h1>
            <StudentsForm onNewStudent={setNewStudentHandler}/>

            {studentList && studentList.length > 0 ? (
            <>
                <h2>{studentList.length === 1 ? 'Studentas:' : 'Studentai:'}</h2>
                {studentList.map((student, index) => (
                    <StudentsItem 
                    key={index}
                    data={student}
                    index={index}
                    deleteStudent={deleteStudent}
                    />
                ))}
            </>
            ) : (
                <p>Studentų sąrašas tuščias</p>
            )}
            
        </div>
    )
}

export default StudentsPage