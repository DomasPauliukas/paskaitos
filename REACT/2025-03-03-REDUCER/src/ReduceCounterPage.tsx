/* eslint-disable no-case-declarations */
import { useReducer } from "react"
import { ActionTypes, initialState, reducer } from "./ReduceComponent"

const ReduceCounterPage: React.FC = () => {

const [state, dispatch] = useReducer(reducer, initialState)
const { count, grades } = state

    return (
        <>
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch({type: ActionTypes.CHANGE, payload: 1})}>+1</button>
            <button onClick={() => dispatch({type: ActionTypes.CHANGE, payload: -1})}>-1</button>
            <button onClick={() => dispatch({type: ActionTypes.CHANGE, payload: +2})}>+2</button>
            <button onClick={() => dispatch({type: ActionTypes.CHANGE, payload: -2})}>-2</button>
            <button onClick={() => dispatch({type: ActionTypes.RESET})}>reset</button>
            <button onClick={() => dispatch({type: ActionTypes.ADD_GRADE})}>Add grade</button>
            <button onClick={() => dispatch({type: ActionTypes.REMOVE_ALL})}>Remove all grades</button>
        </div>

        <div>
            <h2>Grades:</h2>

            <ul>
                {grades.map((grade, index) => (
                    <li key={index}>{grade} 
                    <button onClick={() => dispatch({type: ActionTypes.DELETE_ONE, payload: index})}>x</button>
                    </li>
                ))}
            </ul>
        </div>
        </>

    )
}

export default ReduceCounterPage