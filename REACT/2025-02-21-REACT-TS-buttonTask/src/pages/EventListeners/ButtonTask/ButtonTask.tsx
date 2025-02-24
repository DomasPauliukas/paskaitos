import './ButtonTask.css'
import React, { useState } from "react"


const ButtonTask: React.FC = () => {
const initialValue = 5
const [num, setNum] = useState<number>(initialValue)

// const Plus1Handler = () => {setNum(prevState => prevState + 1)}
// const Minus1Handler = () => {setNum(prevState => prevState-1)}
// const Plus2Handler = () => {setNum(prevState => prevState+2)}
// const Minus2Handler = () => {setNum(prevState => prevState-2)}

const numHandler = (count: number) => {setNum(prevState => prevState + count)}

const ResetHandler = () => {setNum(initialValue)}


const TypeValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {setNum(Number(event.target.value))}

const [valueList, setValueList] = useState<number[]>([])

const FormSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    
    setValueList(prevList => [...prevList, num])
}

// const deleteItem = (indexToDelete) => {
//     setValueList((prevList) => prevList.filter((_, index) => index !== indexToDelete));
//   };

const deleteItem = (index: number) => {
    setValueList( (prevList) => {
        const newArray = [...prevList]
        newArray.splice(index, 1)
        return newArray
    })
}

// let color = num >=5 ? 'green' : 'red'

const getColor = (count: number) => {
    if (count > 10) {
        return 'blue'
    } else if (count >= 5) {
        return 'green'
    } else {
        return 'red'
    }
}

    return (
        <div>

            {/* <h3 className={color}>{num}</h3> */} 
            {/* <h3 style={{color}}>{num}</h3> */}
            <h3 style={{color: getColor(num)}}>{num}</h3>


            <button onClick={() => numHandler(1)} disabled={num>9}>+</button>
            <button onClick={() => numHandler(-1)} disabled={num<2}>-</button>
            <button onClick={() => numHandler(2)}>+2</button>
            <button onClick={() => numHandler(-2)}>-2</button>
            <button onClick={ResetHandler}>reset</button>

            <form onSubmit={FormSubmitHandler}>
            <input type='number' onChange={TypeValueHandler}></input>
            <button type='submit'>Submit</button>
            

            </form>

            <h4> {valueList.length > 0 ? 'Balai:' : 'Balų nėra'} </h4>

            {valueList.length > 0 && (
            <ol>
                {valueList.map((number, index) => {
                    console.log(number)
                    // const itemColor = number > 4 ? 'green' : 'red'
                    return (
                        // <li className={itemColor} key={index}>
                        <li key={index} style={{color: getColor(number)}}>
                        {number}
                        <button onClick={() => deleteItem(index)}>Delete</button>

                    </li>
                )})}
            </ol>
            )}
                

        </div>
    )
}

export default ButtonTask