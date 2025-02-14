import { useState } from "react"

function EventListenersPage () {

    // useState()

    const [num, setNum] = useState(5)


    const PlustOneHandler = () => setNum(num+1)

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={PlustOneHandler} disabled={num>9}>Click</button>
        </div>
    )
}

export default EventListenersPage