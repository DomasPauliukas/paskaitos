import { createContext, ReactNode, useContext } from "react"

type StudentsPageContextType = {
    name: string

}

const studentPageContext = createContext()


type StudentPageContextProviderProps = {
    children: ReactNode
}

export const StudentPageContextProvider: React.FC<StudentPageContextProviderProps> = ({children}) => {

const ctxValue =

StudentPageContextProviderProps = {
    name: ''
}

    return (
        <studentPageContext.Provider value={}>
            {children}
        </studentPageContext.Provider>
    )
}

// export const useContextExample = () => {
//     const ctx = useContext(studentPageContext)
  
//     if (!ctx) {
//       throw new Error('UseContextExample cannot be used outside the testContext.Provider')
//     }
//   }