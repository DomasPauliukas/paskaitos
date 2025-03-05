import { useGrades } from "./GradesContextProvide"
import GradesItem from "./GradesItem"


const GradesList: React.FC = () => {
    const { grades } = useGrades()
    return(
            <div>
                <h2>Grades:</h2>

                <ul>
                    {grades.map((grade, index) => (
                        <GradesItem 
                        key={index} 
                        grade={grade} 
                        index={index} 
                        />
                    ))}
                </ul>
            </div>
    )
}

export default GradesList