import { EventController } from "@controllers/event.controller";
import { allowedRoles, identifier } from "@middlewares/authenticator";
import { Router } from "express";

const router = Router();

router.get("/:id", identifier, allowedRoles("Admin", "Organizer", "Attendee"), EventController.getEvent)
router.get("/", identifier, allowedRoles("Admin", "Organizer", "Attendee"), EventController.getAllEvents)

router.post("/", identifier, allowedRoles("Admin", "Organizer"), EventController.create)

router.patch("/:id", identifier, allowedRoles("Admin", "Organizer"), EventController.update)
router.delete("/:id", identifier, allowedRoles("Admin", "Organizer"), EventController.delete)



export default router;

