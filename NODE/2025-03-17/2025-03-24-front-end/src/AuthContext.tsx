// npm i jwt-decode

import { createContext, useContext } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    return (
        <AuthContext.Provider value={{ token }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error(`useAuth must be used inside AuthProvider`)
    }
}