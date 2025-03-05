type GradeControlsProps = {
    onAddGrade: () => void
    onReset: () => void
    onRemoveAll: () => void
    onChangeGrade: (num: number) => void
}
const GradeControls: React.FC<GradeControlsProps> = (props) => {
    const { onAddGrade, onReset, onRemoveAll, onChangeGrade } = props
    return (

        <div>
            <button onClick={() => onChangeGrade(1)}>+1</button>
            <button onClick={() => onChangeGrade(-1)}>-1</button>
            <button onClick={() => onChangeGrade(2)}>+2</button>
            <button onClick={() => onChangeGrade(-2)}>-2</button>
            <button onClick={() => onReset()}>reset</button>
            <button onClick={() => onAddGrade()}>Add grade</button>
            <button onClick={() => onRemoveAll()}>Remove all grades</button>
        </div>
    )
}
 export default GradeControls