import { useReducer } from "react"


//actionTypes kuriamas, kad isvengti rasybos klaidu tarp switch'o case ir dispatch funkcijose kai kvieciame. Bet galima rasyti ir be actionTypes, tiesiog stringus prie case 'INCREMENT' , 'DECREMENT'.
const actionTypes = {
    'INCREMENT' : 'increment',
    'DECREMENT' : 'decrement'
}

const initialState = {
    count: 5
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                count: state.count + 1
            }
        case actionTypes.DECREMENT:
            return {
                count: state.count - 1
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

    const incrementHandler = () => dispatch({type: actionTypes.INCREMENT})
    const decrementHandler = () => dispatch({type: actionTypes.DECREMENT})


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementHandler}>add +1</button>
            <button onClick={decrementHandler}>add -1</button>
        </div>

    )
}

export default ReduceCounterPage