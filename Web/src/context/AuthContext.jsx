import { createContext, useContext, useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { Navigate, useNavigate } from 'react-router-dom'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const {authUser} = useAuthStore()


    return (
        <AuthContext.Provider value={{authUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
