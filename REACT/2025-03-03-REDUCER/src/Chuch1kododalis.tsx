import axios from "axios"
import { useEffect, useState } from "react"

const ChuckReducerPage: React.FC = () => {

const [joke, setJoke] = useState('')
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)

useEffect(() => {
    const fetchJoke = async() => {
        try {
            setLoading(true)
            const { data } = await axios('https://api.chucknorris.io/jokes/random')
            setJoke(data.value)
            setLoading(false)
        } catch {
            setError('Something went wrong...')
            setLoading(false)
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