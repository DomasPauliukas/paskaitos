import axios from "axios"
import { useEffect, useReducer} from "react"
import { ActionTypes, initialState, reducer } from "./ChuckReducerComponent"

const ChuckReducerPage: React.FC = () => {

const [state, dispatch] = useReducer(reducer, initialState)
const { joke, loading, error } = state


useEffect(() => {
    const fetchJoke = async() => {
        try {
            dispatch({type: ActionTypes.FETCH_JOKE})
            const { data } = await axios('https://api.chucknorris.io/jokes/random')
            
            dispatch({type: ActionTypes.SUCCESS, payload: data.value})

        } catch {
            dispatch({type: ActionTypes.FAIL})
            throw new Error ('Smth went wrong')
        }
        // finally {
        //     setLoading(false)
        // } ---> Galima rasyti su finally, tada nereikia setLoading(false) virsuje rasyti, Finally suveiks bet kokiu atveju, jei pavyks TRY ar CATCH.

    }
    fetchJoke ()
}, [])

if (loading) {
    return <p>Loading...</p>
}

if (error) {
    return <p>{error}</p>
}

    return(
        <div>
            <h1>{joke}</h1>
        </div>


    )
}
export default ChuckReducerPage