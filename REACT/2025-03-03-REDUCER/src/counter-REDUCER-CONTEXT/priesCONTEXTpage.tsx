/* eslint-disable no-case-declarations */
import { useReducer } from "react"
import GradesList from "./GradesList"
import GradeControls from "./GradeControls"
import { ActionTypes, initialState, reducer } from "./GradesReducer"

const GradesPage: React.FC = () => {

const [state, dispatch] = useReducer(reducer, initialState)
const { count, grades } = state

const changeGradeHandler = (num: number) => {
    dispatch({type: ActionTypes.CHANGE, payload: num})
}

const addGradeHandler = () => {
    dispatch({type: ActionTypes.ADD_GRADE})
}

const removeOneHandler = (index: number) => {
    dispatch({type: ActionTypes.DELETE_ONE, payload: index})
}

const removeAllHandler = () => {
    dispatch({type: ActionTypes.REMOVE_ALL})
}

const resetHandler = () => {
    dispatch({type: ActionTypes.RESET})
}


    return (
        <>
            <h1>{count}</h1>
            <GradeControls 
            onAddGrade={addGradeHandler}
            onReset={resetHandler}
            onRemoveAll={removeAllHandler}
            onChangeGrade={changeGradeHandler}
            />
            
            <GradesList grades={grades} onRemoveOne={removeOneHandler}/>
        </>

    )
}

export default GradesPage