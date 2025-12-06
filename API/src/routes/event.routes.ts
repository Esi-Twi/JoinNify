import { EventController } from "@controllers/event.controller";
import { allowedRoles, identifier } from "@middlewares/authenticator";
import { Router } from "express";

const router = Router();

router.get("/:id", identifier, allowedRoles("Admin", "Organizer", "Attendee"), EventController.get)

router.post("/", identifier, allowedRoles("Admin", "Organizer", "Attendee"), EventController.create)

router.patch("/:id", identifier, allowedRoles("Admin", "Organizer", "Attendee"), EventController.update)
router.delete("/:id", identifier, allowedRoles("Admin", "Organizer", "Attendee"), EventController.delete)



export default router;