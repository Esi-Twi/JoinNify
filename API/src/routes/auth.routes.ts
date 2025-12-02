import { AuthControllers } from "@controllers/auth.controllers";
import { Router } from "express";

const router = Router()



router.post("/register", AuthControllers.register)
router.post("/verify-email", AuthControllers.verifyEmail)

router.post("/login", AuthControllers.login)

router.get("/logout", AuthControllers.logout)




export default router;