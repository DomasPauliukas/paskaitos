import { useReducer, useState } from "react"


//actionTypes kuriamas, kad isvengti rasybos klaidu tarp switch'o case ir dispatch funkcijose kai kvieciame. Bet galima rasyti ir be actionTypes, tiesiog stringus prie case 'INCREMENT' , 'DECREMENT'.
const actionTypes = {
    'PLUS1': 'plus1',
    'MINUS1': 'minus1',
    'PLUS2': 'plus2',
    'MINUS2': 'minus2',
    'RESET': 'reset'
}

const initialState = {
    count: 5
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.PLUS1:
            return {
                count: state.count + 1
            }
        case actionTypes.MINUS1:
            return {
                count: state.count - 1
            }
        case actionTypes.PLUS2:
            return {
                count: state.count + 2
            }
        case actionTypes.MINUS2:
            return {
                count: state.count - 2
            }
        case actionTypes.RESET:
            return {
                count: initialState.count
            }

        default:
            return state
    }
}



const ReduceCounterPage: React.FC = () => {

const [state, dispatch] = useReducer(reducer, initialState)
const { count } = state

    // const initialValue = 5
    // const [count, setCount] = useState(initialValue)

    const plus1Handler = () => dispatch({type: actionTypes.PLUS1})
    const minus1Handler = () => dispatch({type: actionTypes.MINUS1})
    const plus2Handler = () => dispatch({type: actionTypes.PLUS2})
    // const minus2Handler = () => dispatch({type: actionTypes.MINUS2})
    // const resetHandler = () => dispatch({type: actionTypes.RESET})

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={plus1Handler}>+1</button>
            <button onClick={minus1Handler}>-1</button>
            <button onClick={plus2Handler}>+2</button>
            <button onClick={() => dispatch({type: actionTypes.MINUS2})}>-2</button>
            <button onClick={() => dispatch({type: actionTypes.RESET})}>reset</button>

            {/* galima funkcija kviesti is karto htmle, prie button */}
        </div>

    )
}

export default ReduceCounterPage