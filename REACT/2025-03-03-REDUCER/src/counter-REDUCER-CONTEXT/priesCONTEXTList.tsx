import GradesItem from "./GradesItem"

type GradesListProps = {
    grades: number[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onRemoveOne: (index: number) => void
}

const GradesList: React.FC<GradesListProps> = (props) => {
    const { grades, onRemoveOne } = props
    return(
            <div>
                <h2>Grades:</h2>

                <ul>
                    {grades.map((grade, index) => (
                        <GradesItem 
                        key={index} 
                        grade={grade} 
                        index={index} 
                        onRemoveOne={onRemoveOne}
                        />
                    ))}
                </ul>
            </div>
    )
}

export default GradesList