/* eslint-disable no-case-declarations */
import { useReducer, useState } from "react"


//actionTypes kuriamas, kad isvengti rasybos klaidu tarp switch'o case ir dispatch funkcijose kai kvieciame. Bet galima rasyti ir be actionTypes, tiesiog stringus prie case 'INCREMENT' , 'DECREMENT'.

//action.payload - kad isvengti daug case rasymo, galima supaprastinti. nes keiciasi tik skaicius.

// po case : galima deti {} skliaustus, taip sukurit atskira scope, jei naudojame kelis kintamuosius tuo paciu pavadinimu. nes viskas kas yra reducer funkcijoje yra VIENAS scope. todel jame negali kartotis kintamieji.

const actionTypes = {
    'CHANGE': 'change',
    'RESET': 'reset',
    'ADD_GRADE': 'addGrade',
    'REMOVE_ALL': 'removeAll',
    'DELETE_ONE': 'deleteOne'
}

const initialState = {
    count: 5,
    grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

const reducer = (state, action) => {
    switch (action.type) {

        case actionTypes.CHANGE:
            return {
                ...state,
                count: state.count + action.payload
            }
        case actionTypes.RESET:
            return {
                ...state,
                count: initialState.count
            }
        case actionTypes.ADD_GRADE: {

            const newGrades = [state.count, ...state.grades]
            return {
                ...state,
                grades: newGrades
            }
        }
        case actionTypes.REMOVE_ALL:
            return {
                ...state,
                grades: initialState.grades
            }
        case actionTypes.DELETE_ONE: 
            console.log(action.payload)
            // const newGrades = state.grades.filter((_, index) => index !== Number(action.payload))
            const newGrades = [...state.grades]
            newGrades.splice(action.payload, 1)
            return {
                ...state,
                grades: newGrades
            }

    //prie return rasome ...state, is pradziu, todel, kad graziname praejusi visa state ir tada pakeiciame, kas turi buti pakeista. siuo atveju, graziname sena state, ir pakeiciame grades: newGrades. atnaujiname grades []
                
            

        default:
            return state
    }
}



const ReduceCounterPage: React.FC = () => {

const [state, dispatch] = useReducer(reducer, initialState)
const { count, grades } = state

// Dispatch pirmas objekto narys visada bus actionType, o antra jei reikia, siuo atveju, payload.
    const plus1Handler = () => dispatch({type: actionTypes.CHANGE, payload: 1})
    const minus1Handler = () => dispatch({type: actionTypes.CHANGE, payload: -1})
    const plus2Handler = () => dispatch({type: actionTypes.CHANGE, payload: +2})
    const minus2Handler = () => dispatch({type: actionTypes.CHANGE, payload: -2})
    const resetHandler = () => dispatch({type: actionTypes.RESET})
    const addGradeHandler = () => dispatch({type: actionTypes.ADD_GRADE})
    const removeAllGradesHandler = () => dispatch({type: actionTypes.REMOVE_ALL})
    const deleteGradeHandler = (index) => dispatch({type: actionTypes.DELETE_ONE, payload: index})

    return (
        <>
        <div>
            <h1>{count}</h1>
            <button onClick={plus1Handler}>+1</button>
            <button onClick={minus1Handler}>-1</button>
            <button onClick={plus2Handler}>+2</button>
            <button onClick={minus2Handler}>-2</button>
            <button onClick={resetHandler}>reset</button>
            <button onClick={addGradeHandler}>Add grade</button>
            <button onClick={removeAllGradesHandler}>Remove all grades</button>
        </div>

        <div>
            <h2>Grades:</h2>

            <ul>
                {grades.map((grade, index) => (
                    <li key={index}>{grade} 
                    <button onClick={() => deleteGradeHandler(index)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
        </>

    )
}

export default ReduceCounterPage