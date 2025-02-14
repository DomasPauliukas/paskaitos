import './ButtonTask.css'
import { useState } from "react"


function ButtonTask () {
const initialValue = 5
const [num, setNum] = useState(initialValue)

const Plus1Handler = () => {setNum(prevState => prevState + 1)}
const Minus1Handler = () => {setNum(prevState => prevState-1)}
const Plus2Handler = () => {setNum(prevState => prevState+2)}
const Minus2Handler = () => {setNum(prevState => prevState-2)}
const ResetHandler = () => {setNum(initialValue)}


const TypeValueHandler = (event) => {setNum(Number(event.target.value))}

const [valueList, setValueList] = useState([])
const FormSubmitHandler = (event) => {
    event.preventDefault()
    
    setValueList(prevList => [...prevList, num])
}

const deleteItem = (indexToDelete) => {
    setValueList((prevList) => prevList.filter((_, index) => index !== indexToDelete));
  };

let color = num >=5 ? 'green' : 'red'

    return (
        <div>

            <h3 className={color}>{num}</h3>

            <button onClick={Plus1Handler} disabled={num>9}>+</button>
            <button onClick={Minus1Handler} disabled={num<2}>-</button>
            <button onClick={Plus2Handler}>+2</button>
            <button onClick={Minus2Handler}>-2</button>
            <button onClick={ResetHandler}>reset</button>

            <form onSubmit={FormSubmitHandler}>
            <input type='number' onChange={TypeValueHandler}></input>
            <button type='submit'>Submit</button>
            

            </form>

            <h4>Balai: </h4>
            <ol>
                {valueList.map((number, index) => {
                    const itemColor = number > 4 ? 'green' : 'red'
                    return (
                    <li className={itemColor} key={index}>
                        {number}
                        <button onClick={() => deleteItem(index)}>Delete</button>

                    </li>
                )})}
            </ol>

        </div>
    )
}

export default ButtonTask