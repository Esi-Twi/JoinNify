import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";


const ProtectedRoute = ({children}) => {
    const { authUser } = useAuthStore()

    return authUser?.token ? children : <Navigate to="/auth/login" replace />
}

export default ProtectedRoute



