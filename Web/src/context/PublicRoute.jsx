import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";


const PublicRoute = () => {
    const { authUser } = useAuthStore()


    return < Outlet/>
}

export default PublicRoute



