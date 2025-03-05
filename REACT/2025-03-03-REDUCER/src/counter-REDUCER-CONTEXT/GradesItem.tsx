import { useGrades } from "./GradesContextProvide"

type GradesItemProps = {
    grade: number
    index: number
}

const GradesItem: React.FC<GradesItemProps> = (props) => {
    const { removeOneHandler} = useGrades()
    const { index, grade } = props

    return(
        <div>
            <li key={index}>{grade} 
            <button onClick={() => removeOneHandler(index)}>x</button>
            </li>
        </div>
    )
}

export default GradesItem