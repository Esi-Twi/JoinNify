import { AuthControllers } from "@controllers/auth.controller";
import { identifier } from "@middlewares/authenticator";
import { Router } from "express";

const router = Router()



router.post("/register", AuthControllers.register)
router.post("/verify-email", AuthControllers.verifyEmail)
router.post("/forgot-password", AuthControllers.forgotPassword)
router.post("/reset-password", AuthControllers.resetPassword)

router.post("/login", AuthControllers.login)

router.get("/logout", identifier, AuthControllers.logout)




export default router;