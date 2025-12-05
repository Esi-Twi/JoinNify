import { UserRoles } from "@database/enum";
import { JWTPayload } from "types";

declare global {
    namespace Express {
        interface Request {
            user?: JWTPayload, 
            role: UserRoles
        }
    }
}

