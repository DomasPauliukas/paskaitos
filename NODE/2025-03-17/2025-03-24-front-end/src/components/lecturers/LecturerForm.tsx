import { useEffect, useState } from "react"
import { API_URL } from "../API_URL"
import { Group, Lecturer, Subject } from "../types/TypesExport"
import { useNavigate } from "react-router-dom"
import axios from "axios"

type LecturerFormProps = {
    editLecturerData?: Lecturer
}

const LecturerForm: React.FC<LecturerFormProps> = ( {editLecturerData} ) => {
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [yearsOfExperience, setYearsOfExperience] = useState<string>('')
    const [office, setOffice] = useState<string>('')
    const [subjects, setSubjects] = useState<Subject[]>([])
    const [subjectIds, setSubjectIds] = useState<string[]>([])
    const [groups, setGroups] = useState<Group[]>([])
    const [groupIds, setGroupIds] = useState<string[]>([])

    const firstNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)
    const lastNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)
    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
    const experienceHandler = (event: React.ChangeEvent<HTMLInputElement>) => setYearsOfExperience(event.target.value)
    const officeHandler = (event: React.ChangeEvent<HTMLInputElement>) => setOffice(event.target.value)

    const subjectsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target
        if (checked) {
            setSubjectIds((prevState) => [...prevState, value])
        } else {
            setSubjectIds((prevState) => prevState.filter((language) => language !== value))
        }
    }

    const groupsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target
        if (checked) {
            setGroupIds((prevState) => [...prevState, value])
        } else {
            setGroupIds((prevState) => prevState.filter((language) => language !== value))
        }
    }


    useEffect(() => {
        const fetchSubjects = async () => {
            const res = await fetch (`${API_URL}/subjects`)
            const subjects = await res.json()
            setSubjects(subjects)
        }
        const fetchGroups = async () => {
            const res = await fetch (`${API_URL}/groups`)
            const groups = await res.json()
            setGroups(groups)
        }
        fetchSubjects()
        fetchGroups()
    }, [])

    useEffect(() => {
        if(editLecturerData) {
           setFirstName(editLecturerData.firstName)
           setLastName(editLecturerData.lastName)
           setEmail(editLecturerData.email)
           setOffice(editLecturerData.office)
           setYearsOfExperience(editLecturerData.yearsOfExperience)
           setSubjectIds(editLecturerData.subjects)
           setGroupIds(editLecturerData.groups)
        }
    }, [editLecturerData])


    const formHandler = (event: React.FormEvent) => {
        event?.preventDefault()

        const newLecturer = {
            firstName,
            lastName,
            email,
            yearsOfExperience,
            office,
            subjects: subjectIds,
            groups: groupIds
        }

        if (editLecturerData) {
            axios.put(`${API_URL}/lecturers/${editLecturerData.id}`, newLecturer)
            navigate(`/Lecturers/${editLecturerData.id}`)
        } else {
            axios.post(`${API_URL}/lecturers`, newLecturer)
            navigate('/Lecturers')
        }

    }
    return(

        <form onSubmit={formHandler}>
            <div>
                <label htmlFor="firstName">First name:</label>
                <input type="firstName" name="firstName" id="firstName" value={firstName} onChange={firstNameHandler}/>
            </div>
            <div>
                <label htmlFor="lastName">Last name:</label>
                <input type="lastName" name="lastName" id="lastName" value={lastName} onChange={lastNameHandler}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={email} onChange={emailHandler}/>
            </div>
            <div>
                <label htmlFor="yearsOfExperience">Experience (years):</label>
                <input type="yearsOfExperience" name="yearsOfExperience" id="yearsOfExperience" value={yearsOfExperience} onChange={experienceHandler}/>
            </div>
            <div>
                <label htmlFor="office">Office:</label>
                <input type="office" name="office" id="office" value={office} onChange={officeHandler}/>
            </div>
            <div>
                <label htmlFor="subjects">Select subjects:</label><br />
                {subjects.map(subject => (
                    <div key={subject.id}>
                        <input type="checkbox" name="subjects" value={subject.id} id={subject.id} onChange={subjectsHandler} checked={subjectIds.includes(subject.id)}/>
                        <label htmlFor={subject.id}>{subject.subject}</label><br />
                    </div>
                ))}
            </div>

            <div>
                <label htmlFor="groups">Select student groups:</label><br />
                {groups.map(group => (
                    <div key={group.id}>
                        <input type="checkbox" name="groups" value={group.id} id={group.id} onChange={groupsHandler} checked={groupIds.includes(group.id)}/>
                        <label htmlFor={group.id}>{group.name}</label><br />
                    </div>
                ))}
            </div>

    <button type="submit">{editLecturerData? 'Edit lecturer' : 'Create lecturer'}</button>
</form>

    )
}
export default LecturerForm