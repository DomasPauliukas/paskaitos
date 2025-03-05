
type GradesItemProps = {
    grade: number
    index: number
    onRemoveOne: (index: number) => void
}

const GradesItem: React.FC<GradesItemProps> = (props) => {
    const { grade, index, onRemoveOne } = props

    return(
        <div>
            <li key={index}>{grade} 
            <button onClick={() => onRemoveOne(index)}>x</button>
            </li>
        </div>
    )
}

export default GradesItem