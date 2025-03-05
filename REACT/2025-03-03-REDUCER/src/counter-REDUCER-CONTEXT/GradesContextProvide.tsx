import { createContext, ReactNode, useContext, useReducer } from "react";
import { ActionTypes, initialState, reducer } from "./GradesReducer";

type GradesContextType = {                                                                       // 6.
    count: number
    grades: number[]
    changeGradeHandler: (num: number) => void
    addGradeHandler: () => void
    removeOneHandler: (index: number) => void
    removeAllHandler: () => void
    resetHandler: () => void
}


const GradesContext = createContext<GradesContextType | undefined>(undefined)                   //    1.  sukuriame Konteksta


type GradesContextProviderProps = {                                                             //    4.
    children: ReactNode
}



export const GradesContextProvider: React.FC<GradesContextProviderProps> = ({children}) => {      // 3.

const [state, dispatch] = useReducer(reducer, initialState)                                   //  7. rasomi state ir visos funkcijos, tada funkcijos pridedames prie visu tipu.
const { count, grades } = state                                                                     // cia buna visi state surasyti, siuo atveju Reducer naudojom

const changeGradeHandler = (num: number) => {
    dispatch({type: ActionTypes.CHANGE, payload: num})
}

const addGradeHandler = () => {
    dispatch({type: ActionTypes.ADD_GRADE})
}

const removeOneHandler = (index: number) => {
    dispatch({type: ActionTypes.DELETE_ONE, payload: index})
}

const removeAllHandler = () => {
    dispatch({type: ActionTypes.REMOVE_ALL})
}

const resetHandler = () => {
    dispatch({type: ActionTypes.RESET})
}


const initialValue: GradesContextType = {                                                            // 5.
    count,                                                                                           // 8. pridedame funkcijas ir pan. toks pat kaip tipas virsuje
    grades,
    changeGradeHandler,
    addGradeHandler,
    removeOneHandler,
    removeAllHandler,
    resetHandler
}

    return (
        <GradesContext.Provider value={initialValue}>
            {children}
        </GradesContext.Provider>
    )
}





export const useGrades = () => {
    const ctx = useContext(GradesContext)

    if (!ctx) {
        throw new Error('UseGrades cannot be used outside the GradesContextProvider')
    }
    return ctx
}                                                                       //   2.  su useGrades paimame sukurta Konteksta (GradesContext) 
                                     // useGrades naudojame kituose komponentuosi, destrukturizuoti viskam.
    // useGrades cia sukurtas Hook'as kad nereiktu kituose komponentuose visada rasyti useContext.