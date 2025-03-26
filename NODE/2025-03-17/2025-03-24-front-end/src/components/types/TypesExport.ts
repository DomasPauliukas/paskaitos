export interface Student {
    name: string,
    surname: string,
    city: string,
    email: string,
    interests: string[],
    age: number,
    id: string
}

export interface Lecturer {
    firstName: string,
    lastName: string,
    email: string,
    department: string,
    id: string,
    office: string,
    yearsOfExperience: string
}