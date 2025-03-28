export interface Student {
    name: string,
    surname: string,
    city: string,
    email: string,
    interests: string[],
    age: number,
    id: string,
    groupId: string,
    languages: string[],
}

export interface Lecturer {
    firstName: string,
    lastName: string,
    email: string,
    department: string,
    id: string,
    office: string,
    yearsOfExperience: string,
    subjects: string[],
    groups: string[],
}

export interface Group {
    name: string,
    number: number,
    id: string
}

export interface Subject {
    subject: string,
    id: string
}

export interface Language {
    language: string,
    id: string
}