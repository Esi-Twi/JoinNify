import { toast } from "sonner"
import api from "../api/axios"
import { create } from "zustand"

export const useEventStore = create((set) => ({
    isCreatingEvent: false,
    isGettingEvent: false,
    myEvents: [],

    createEvent: async(data) => {
        set({isCreatingEvent: true})
        try {
            const res = await api.post("/events", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }})

            toast.success(res.data?.msg)
            
        } catch (error) {
            let message = error?.response?.data?.message
            toast.error(message ?? "Failed to create event")

            console.log("create event store ", error);
        } finally {
            set({isCreatingEvent: false})
        }
    }, 
    getMyEvents: async(data) => {
        set({isGettingEvent: true})
        try {
            const res = await api.get("/events")
            set({myEvents: res.data?.events || []})
            
        } catch (error) {
            let message = error?.response?.data?.message
            toast.error(message ?? "Failed to get events")

            console.log("create event store ", error);
        } finally {
            set({isGettingEvent: false})
        }
    }, 



}))

