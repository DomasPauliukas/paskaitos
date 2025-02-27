import { StudentPageContextProvider } from "./StudentPageContextProvider"

const StudentsPage2: React.FC =  () => {

    return (
        <StudentPageContextProvider>
            <h1>Form</h1>
            <h2>Student List</h2>
        </StudentPageContextProvider>
    )
}

export default StudentsPage2