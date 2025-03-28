import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../API_URL"
import { useNavigate } from "react-router-dom"
import { Group, Language, Student } from "../types/TypesExport"

type StudentFormProps = {
    editStudentData?: Student
}

const StudentForm: React.FC<StudentFormProps> = ( {editStudentData} ) => {
    const navigate = useNavigate()

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [age, setAge] = useState<number>()
    const [city, setCity] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [interests, setInterests] = useState<string[]>([])

    const [groups, setGroups] = useState<Group[]>([])
    const [groupId, setGroupId] = useState<string>('')

    const [languages, setLanguages] = useState<Language[]>([])
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])

    useEffect(() => {
        const fetchGroups = async () => {
            const res = await fetch(`${API_URL}/groups`)
            const data = await res.json()
            setGroups(data)
        }
        const fetchLanguages = async () => {
            const res = await fetch(`${API_URL}/languages`)
            const languages = await res.json()
            setLanguages(languages)
        }
        fetchGroups()
        fetchLanguages()
    }, [])
    const groupIdHandler = (event: React.ChangeEvent<HTMLSelectElement>) => setGroupId(event.target.value)
    
    const languageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target
        if (checked) {
            setSelectedLanguages((prevState) => [...prevState, value])
        } else {
            setSelectedLanguages((prevState) => prevState.filter((language) => language !== value))
        }
    }


    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)
    const surnameHandler = (event: React.ChangeEvent<HTMLInputElement>) => setSurname(event.target.value)
    const ageHandler = (event: React.ChangeEvent<HTMLInputElement>) => setAge(Number(event.target.value))
    const cityHandler = (event: React.ChangeEvent<HTMLInputElement>) => setCity(event.target.value)
    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
    const interestsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target
        if (checked) {
            setInterests((prevState) => [...prevState, value])
        } else {
            setInterests((prevState) => prevState.filter((interest) => interest !== value))
        }
    }

    useEffect(() => {
        if (editStudentData) {
            setName(editStudentData.name)
            setSurname(editStudentData.surname)
            setAge(editStudentData.age)
            setCity(editStudentData.city)
            setEmail(editStudentData.email)
            setInterests(editStudentData.interests)
            setGroupId(editStudentData.groupId)
            setSelectedLanguages(editStudentData.languages || [])
        }
    }, [editStudentData])

    const formSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const newStudent = {
            name,
            surname,
            age,
            city,
            email,
            interests,
            groupId,
            languages: selectedLanguages
        }
    
    if (editStudentData) {
        axios.put(`${API_URL}/students/${editStudentData._id}`, newStudent)
        navigate(`/Students/${editStudentData._id}`)
    } else {
        axios.post(`${API_URL}/students`, newStudent)
            .then(() => {
                navigate('/Students')
            })
    }
}
    return (
        <div>
          <form onSubmit={formSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={name} onChange={nameHandler}/>
            </div>
            <div>
                <label htmlFor="surname">Surname:</label>
                <input type="text" name="surname" id="surname" value={surname} onChange={surnameHandler}/>
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" name="age" id="age" value={age} onChange={ageHandler}/>
            </div>
            <div>
                <label htmlFor="city">City:</label>
                <input type="text" name="city" id="city" value={city} onChange={cityHandler}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" value={email} onChange={emailHandler}/>
            </div>
            <div>
                <label htmlFor="interests">Select your interests:</label><br />

                <input type="checkbox" name="interests" value="Reading" id="reading" checked={interests.includes('Reading')} onChange={interestsHandler}/>
                <label htmlFor="reading">Reading</label><br />

                <input type="checkbox" name="interests" value="Traveling" id="traveling" checked={interests.includes('Traveling')} onChange={interestsHandler}/>
                <label htmlFor="traveling">Traveling</label><br />

                <input type="checkbox" name="interests" value="Music" id="music" checked={interests.includes('Music')} onChange={interestsHandler}/>
                <label htmlFor="music">Music</label><br />

                <input type="checkbox" name="interests" value="Sports" id="sports" checked={interests.includes('Sports')} onChange={interestsHandler}/>
                <label htmlFor="sports">Sports</label><br />
            </div>
            <div>
                <label htmlFor="group">Select Group:</label>
                <select name="groupId" id="group" onChange={groupIdHandler} value={groupId}>
                <option value="">Select group</option>
                {groups.map(group => (
                    <option key={group._id} value={group._id}>{group.name}</option>
                ))}
                </select>
            </div>
            <div>
                <label htmlFor="languages">Select your languages:</label><br />
                {languages.map((language, index) => (
                    <div key={index}>
                        <input type="checkbox" name="languages" value={language.language} id={language._id} checked={selectedLanguages.includes(language.language)} onChange={languageHandler}/>
                        <label htmlFor={language._id}>{language.language}</label><br />
                    </div>
                ))}
  </div>

                <button type="submit">{editStudentData ? 'Edit' : 'Add'}</button>
          </form>
        </div>
    )
}
export default StudentForm

