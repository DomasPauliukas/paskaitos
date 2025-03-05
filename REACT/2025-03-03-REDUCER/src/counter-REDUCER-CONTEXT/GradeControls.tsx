import { useGrades } from "./GradesContextProvide"

const GradeControls: React.FC = () => {
    const { count, resetHandler, removeAllHandler, addGradeHandler, changeGradeHandler } = useGrades()

    return (

        <div>
            <h1>{count}</h1>

            <button onClick={() => changeGradeHandler(1)}>+1</button>
            <button onClick={() => changeGradeHandler(-1)}>-1</button>
            <button onClick={() => changeGradeHandler(2)}>+2</button>
            <button onClick={() => changeGradeHandler(-2)}>-2</button>
            <button onClick={() => resetHandler()}>reset</button>
            <button onClick={() => addGradeHandler()}>Add grade</button>
            <button onClick={() => removeAllHandler()}>Remove all grades</button>
        </div>
    )
}
 export default GradeControls