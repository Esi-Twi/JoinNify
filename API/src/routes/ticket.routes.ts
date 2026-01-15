import { TicketControllers } from "@controllers/ticket.controller";
import { allowedRoles, identifier } from "@middlewares/authenticator";
import { Router } from "express";
const router = Router()


router.get("", identifier, allowedRoles("Admin", "Organizer", "Attendee"), TicketControllers.getAll)
router.post("", identifier, allowedRoles("Admin", "Organizer", "Attendee"), TicketControllers.book)
router.patch("/:id", identifier, allowedRoles("Admin", "Organizer", "Attendee"), TicketControllers.cancel)



export default router;

