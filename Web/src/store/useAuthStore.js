import { create } from "zustand"
import api from "../api/axios"
import { toast } from "sonner"


export const useAuthStore = create((set) => ({
    authUser: JSON.parse(localStorage.getItem("authUser")) || null,
    isLoggingIn: false,
    isLoggingOut: false,
    isRegistering: false, 


    login: async (data) => {
        set({ isLoggingIn: true })
        try {
            const res = await api.post("/auth/login", data)
            set({ authUser: res.data })
            toast.success(res.data?.msg)
            localStorage.setItem("authUser", JSON.stringify(res.data))

            console.log(res.data);


        } catch (error) {
            let message = error?.response?.data?.message;
            if (message?.includes('password') && message?.includes('fails to match the required pattern')) {
                message = "Password must contain at least one uppercase letter and one number.";
            }

            toast.error(message ?? "Something went wrong")

        } finally {
            set({ isLoggingIn: false })
        }
    },

    registerUser: async (data) => {
        try {
            set({ isRegistering: true })
            const res = await api.post("/auth/register", data)
            set({ authUser: res.data })
            localStorage.setItem("authUser", JSON.stringify(res.data))
            toast.success("Account created successfully!!")

        } catch (error) {
            let message = error?.response?.data?.message;
            if (message?.includes('password') && message?.includes('fails to match the required pattern')) {
                message = "Password must contain at least one uppercase letter and one number.";
            }

            toast.error(message ?? "Something went wrong")
            
        } finally {
            set({ isRegistering: false })
        }
    },

    logout: async() => {
        set({ isLoggingOut: true })
        
        try {
            set({ authUser: null })
            const res = await api.get("/auth/logout")
            localStorage.removeItem("authUser")

            toast.success(res.data?.msg)

        } catch (error) {
            toast.error(error?.response?.data?.message ?? "Something went wrong")

        } finally {
            set({ isLoggingOut: false })
        }
    }, 



}))


