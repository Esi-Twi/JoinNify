import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";


const ProtectedRoute = () => {
    const { authUser } = useAuthStore()

    if(!authUser?.token) {
        return <Navigate to="/auth/login" replace/>
    }

    return <Outlet />
}

export default ProtectedRoute



