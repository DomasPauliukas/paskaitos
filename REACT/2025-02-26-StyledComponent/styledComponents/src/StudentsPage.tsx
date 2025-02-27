import { useEffect, useState } from "react"
import StudentsForm, { Student } from "./StudentsForm"
import StudentsItem from "./StudentsItem"
import styled from "styled-components"
import { toast } from "react-toastify"

const FormTitle = styled.h1`
  color: #2f7b97;
`
const StudentListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`

const StudentsPage: React.FC = () => {

const [studentList, setStudentList] = useState<Student[]>([])

    useEffect(() => {
    fetch('http://localhost:5000/students')
      .then(response => response.json())
      .then(data => setStudentList(data));
  }, []);

  const setNewStudentHandler = (newStudent: Student) => {
    fetch('http://localhost:5000/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    })
      .then(response => response.json())
      .then((addedStudent) => {
        setStudentList((prevState) => [addedStudent, ...prevState]);
      });
  };

  const deleteStudent = (index: number) => {
    const studentToDelete = studentList[index];
    fetch(`http://localhost:5000/students/${studentToDelete.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setStudentList((prevList) =>
          prevList.filter((_, i) => i !== index)
      );
    });
    toast('Studentas ištrintas')
    }

    
  const updateStudentList = (updatedStudent: Student) => {
    setStudentList(prevState => 
      prevState.map(student => 
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
}


    return (
        <div>
            <FormTitle>Studento forma: </FormTitle>
            <StudentsForm onNewStudent={setNewStudentHandler}/>

            {studentList && studentList.length > 0 ? (
            <>
            <StudentListWrapper>
                <h2 style={{width:"100%", textAlign:"center"}}>{studentList.length === 1 ? 'Studentas:' : 'Studentai:'}</h2>
                {studentList.map((student, index) => (
                    <StudentsItem 
                    key={index}
                    data={student}
                    index={index}
                    deleteStudent={deleteStudent}
                    student={student}
                    updateStudentList={updateStudentList}
                    />
                ))}
            </StudentListWrapper>
            </>
            ) : (
                <p>Studentų sąrašas tuščias</p>
            )}
            
        </div>
    )
}

export default StudentsPage