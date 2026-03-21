import { NextFunction, Response, Request } from "express";

type AsyncControllerType = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;

export const asyncHandler =
    (controller: AsyncControllerType) =>
        (req: Request, res: Response, next: NextFunction) => {
            Promise.resolve(controller(req, res, next)).catch(next);
        };

