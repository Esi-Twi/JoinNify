import { UserController } from "@controllers/user.controller";
import { Router } from "express";

const router = Router()

router.patch("/profile", UserController.updateProfile)



export default router;
