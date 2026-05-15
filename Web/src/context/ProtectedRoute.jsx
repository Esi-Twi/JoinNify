import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";


const ProtectedRoute = () => {
    const { authUser } = useAuthStore()


    return authUser?.token
        ? <Outlet />
        : <Navigate to="/auth/login" replace />;
}

export default ProtectedRoute



