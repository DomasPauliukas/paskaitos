import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import styled from "styled-components";

const FormControl = styled.div`
    &.invalid {
        label{
            color: red;
        }
        input{
            border-color: red;
        }
    }
`

export type Student = {
    name: string;
    surname: string;
    age: string;
    phone: string;
    email: string;
    itKnowledge: string;
    selectedType: string;
    selectedLanguages: string[];
    id?: string
  }

type StudentsFormProps = {
    onNewStudent?: (newStudent: Student) => void
    student?: Student
    onEditStudent?: (newStudent: Student) => void
}


const StudentsForm: React.FC<StudentsFormProps> = (props) => {

const { onNewStudent, onEditStudent, student} = props

const [name, setName] = useState<string>('')
const [surname, setSurname] = useState<string>('')
const [age, setAge] = useState<string>('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState<string>('')
const [itKnowledge, setItKnowledge] = useState<string>('5')
const [selectedType, setSelectedType] = useState<string>('20')
const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])

const [nameIsValid, setNameIsValid] = useState(true)
const [error, setError] = useState('')

useEffect(() => {
    if(student){
        setName(student.name)
        setSurname(student.surname)
        setAge(student.age)
        setPhone(student.phone)
        setEmail(student.email)
        setItKnowledge(student.itKnowledge)
        setSelectedType(student.selectedType)
        setSelectedLanguages(student.selectedLanguages) 
    }
}, [student])


const nameHandler = (event: React.ChangeEvent<HTMLInputElement>)  => setName(event.target.value)
const surnameHandler = (event: React.ChangeEvent<HTMLInputElement>) => setSurname(event.target.value)
const ageHandler = (event: React.ChangeEvent<HTMLInputElement>) => setAge(event.target.value)
const phoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)
const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
const itKnowledgeHandler = (event: React.ChangeEvent<HTMLInputElement>) => setItKnowledge(event.target.value)
const selectedTypeHandler = (event: React.ChangeEvent<HTMLInputElement>) => setSelectedType(event.target.value)
const languageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const language = event.target.value;
    setSelectedLanguages((prevState) => {
      if (event.target.checked) {
        return [...prevState, language];
      } else {
        return prevState.filter((languageItem) => languageItem !== language);
      }
    });
  };


// const languageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {setSelectedLanguages((prevState) => event.target.checked ? [event.target.value, ...prevState] : prevState.filter(language => language !== event.target.value))}





const formHandler = (event: React.FormEvent) => {
    event.preventDefault()

    if (name.trim().length === 0){
        setNameIsValid(false)
        setError(`Visi laukai privalo būti užpildyti!`)
        return
    }

    const newStudent = {
        name,
        surname,
        age,
        phone,
        email,
        itKnowledge,
        selectedType,
        selectedLanguages,
        id: student?.id
    }
    if(student) {
        onEditStudent?.(newStudent)
    } else {
        onNewStudent?.(newStudent)
    }

    setNameIsValid(true)
    setError('')

    if (student){
        toast.success('Sėkmingai atnaujinta')
    } else {
        toast.success('Studentas sukurtas')
    }
}

    return (
        <div style={{border: student? 'red 2px solid' : ''}}>
        <form onSubmit={formHandler}>
            <FormControl className={`contact-wrap ${!nameIsValid ? 'invalid' : ''}`} >
                <label htmlFor="name-text">Vardas: </label>
                <input type="text" name="person-name" id="name-text" value={name} onChange={nameHandler}/>
            </FormControl>

            <div className="contact-wrap">
                <label htmlFor="surname-text">Pavardė: </label>
                <input type="text" name="person-surname" id="surname-text" value={surname} onChange={surnameHandler}required/>
            </div>
            
            <div className="contact-wrap">
                <label htmlFor="age">Amžius:</label>
                <input type="number" name="person-age" id="age" min="0" max="100" value={age} onChange={ageHandler} required/>
            </div>

            <div className="contact-wrap">
                <label htmlFor="phone">Telefono nr.:</label>
                <input type="tel" name="person-phone" id="phone" value={phone} onChange={phoneHandler} required/>
            </div>

            <div className="contact-wrap">
                <label htmlFor="email">El. pašto adresas:</label>
                <input type="email" name="person-email" id="email" required value={email} onChange={emailHandler}/>
            </div>

            <div className="contact-wrap">
                <label htmlFor="IT-knowledge">IT žinios:</label>
                <input type="range" name="person-knowledge" id="IT-knowledge" min="1" max="10" step="1" value={itKnowledge} onChange={itKnowledgeHandler}/>
                <output>{itKnowledge}</output>
                <span className="ITFormValue"></span>
            </div>

            <fieldset>
                <legend >Pasirinkite TYPE grupės numerį:</legend>

                <input type="radio" name="TYPE-number" id="TYPE-number1" value="20" onChange={selectedTypeHandler} checked={selectedType === '20'}/>
                <label htmlFor="TYPE-number1">20gr.</label>

                <input type="radio" name="TYPE-number" id="TYPE-number2" value="21" onChange={selectedTypeHandler} checked={selectedType === '21'}/>
                <label htmlFor="TYPE-number2">21gr.</label>

                <input type="radio" name="TYPE-number" id="TYPE-number3" value="22" onChange={selectedTypeHandler} checked={selectedType === '22'}/>
                <label htmlFor="TYPE-number3">22gr.</label>

                <input type="radio" name="TYPE-number" id="TYPE-number4" value="23" onChange={selectedTypeHandler} checked={selectedType === '23'}/>
                <label htmlFor="TYPE-number4">23gr.</label>

                <input type="radio" name="TYPE-number" id="TYPE-number5" value="24" onChange={selectedTypeHandler} checked={selectedType === '24'}/>
                <label htmlFor="TYPE-number5">24gr.</label>

                <input type="radio" name="TYPE-number" id="TYPE-number6" value="25" onChange={selectedTypeHandler} checked={selectedType === '25'}/>
                <label htmlFor="TYPE-number6">25gr.</label>
            </fieldset>

            <fieldset>
                <legend>Dominančios programavimo kalbos:</legend>
                    <div>
                        <input type="checkbox" name="itLanguages" id="JavaScript" value="JavaScript" onChange={languageHandler} checked={selectedLanguages.includes('JavaScript')}/>
                        <label htmlFor="JavaScript">JavaScript</label>
                    </div>

                    <div>
                        <input type="checkbox" name="itLanguages" id="Python" value="Python" onChange={languageHandler} checked={selectedLanguages.includes('Python')}/>
                        <label htmlFor="Python">Python</label>
                    </div>

                    <div>
                        <input type="checkbox" name="itLanguages" id="Java" value="Java" onChange={languageHandler} checked={selectedLanguages.includes('Java')}/>
                        <label htmlFor="Java">Java</label>
                    </div>

                    <div>
                        <input type="checkbox" name="itLanguages" id="C++" value="C++" onChange={languageHandler} checked={selectedLanguages.includes('C++')}/>
                        <label htmlFor="C++">C++</label>
                    </div>
            </fieldset>
                <p style={{color:'red'}}>{error}</p>
            <button type="submit">Tvirtinti</button>
        </form>
        </div>
    )
}

export default StudentsForm