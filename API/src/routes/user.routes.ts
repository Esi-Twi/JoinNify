import { UserController } from "@controllers/user.controller";
import { allowedRoles, identifier } from "@middlewares/authenticator";
import { Router } from "express";

const router = Router()

router.patch("/profile", identifier, allowedRoles("Admin", "Organizer", "Attendee"), UserController.updateProfile)



export default router;



