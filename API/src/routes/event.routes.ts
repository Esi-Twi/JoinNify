import { EventController } from "@controllers/event.controller";
import { allowedRoles, identifier } from "@middlewares/authenticator";
import upload from "@middlewares/multerMiddleware";
import { Router } from "express";

const router = Router();

router.get("/:id", identifier, allowedRoles("Admin", "Organizer", "Attendee"), EventController.getEvent)
router.get("/", identifier, allowedRoles("Admin", "Organizer"), EventController.getAllEvents)
router.get("/organizer", identifier, allowedRoles("Admin", "Organizer"), EventController.allOrganizerEvents)

router.post("/", identifier, allowedRoles("Admin", "Organizer"), upload.array("images", 9) , EventController.create)

router.patch("/:id", identifier, allowedRoles("Admin", "Organizer"), EventController.update)
router.delete("/:id", identifier, allowedRoles("Admin", "Organizer"), EventController.delete)



export default router;


