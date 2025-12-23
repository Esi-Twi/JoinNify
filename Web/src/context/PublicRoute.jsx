import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";


const PublicRoute = () => {
    const { authUser } = useAuthStore()

    if (authUser?.token) {
        return <Navigate to="/events" replace />
    }

    return <Outlet />

}

export default PublicRoute
