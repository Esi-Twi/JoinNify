import { create } from "zustand";
import api from "../api/axios";
import { toast } from "sonner";

export const useSharedStore = create((set) => ({
    gettingProfileData: false,
    profileData: null, 
    isUpdatingProfile: false,


    getProfileData: async() => {
        set({ gettingProfileData: true })
        try {
            const res = await api.get("/users/profile")
            set({profileData: res.data.profileInfo})
            
        } catch (error) {
            let message = error?.response?.data?.message
            toast.error(message ?? "Something went wrong")

        } finally{
            set({ gettingProfileData: false })
        }
    }, 
    updateProfile: async (profileData) => {
        try {
            set({ isUpdatingProfile: true });
            const res = await api.patch("/users/profile", profileData);
            set({ profileData: res.data.profileInfo });
        } catch (error) {
            let message = error?.response?.data?.message;
            toast.error(message ?? "Something went wrong");
        } finally {
            set({ isUpdatingProfile: false });
        }
    }
}))
