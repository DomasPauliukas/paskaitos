// npm i jwt-decode // kad gauti user informacija cia. decodint token

import { jwtDecode } from "jwt-decode";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface DecodedUser {
    username: string,
    email: string,
    id: string,
    iat: number,
    exp: number
}

interface AuthContextType {
    user: DecodedUser | null
    // token: string | null,
    loginUser: (token: string) => void,
    logoutUser: () => void
    loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)


interface AuthProviderProps {
    children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
const [user, setUser] = useState<DecodedUser | null>(null)
// const [token, setToken] = useState<string | null>(null)
const [loading, setLoading] = useState(true)

useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
        try {
            const decoded = jwtDecode<DecodedUser>(token)

            if (decoded.exp * 1000 > Date.now()) { // patikrinam ar token expire date yra didesne uz dabartine data, tada reiskia galioja dar
                setUser(decoded)
            } else {
                localStorage.removeItem('token')
            }
        } catch {
            localStorage.removeItem('token')
        }
    }
    // setToken(localToken)
    setLoading(false)
}, [])

const loginUser = (token: string) => {
    localStorage.setItem('token', token)
    const decoded = jwtDecode<DecodedUser>(token)
    setUser(decoded)
    // setToken(token)
}

const logoutUser = () => {
    localStorage.removeItem('token')
    setUser(null)
}

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error(`useAuth must be used inside AuthProvider`)
    }

    return context
}