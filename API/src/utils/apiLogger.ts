import { NextFunction, Request, Response } from "express";


export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();

    (res as any).on("finish", () => {
        const duration = Date.now() - start
        console.log(
            `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} ${duration} ms`
        );
        
        next()
        
    })
}






// export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
//     // Listen when response finishes
//     res.on("finish", () => {
//         const duration = Date.now() - start;
//         console.log(
//             `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`
//         );
//     });

//     next();
// };
