 import { useContext, useState } from 'react'

const AuthContext = useContext()

export const AuthProvider = ({childern}) => {
    const [user, setUser] = useState(null)

    const login = (username) => setUser({name: username})
    const logout = () => setUser(null)

    return(
        <AuthContext.Provider value={{user, login, logout}}> 
            {childern}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthProvider)
