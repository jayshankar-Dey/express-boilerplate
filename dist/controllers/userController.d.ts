import { Request, Response, NextFunction } from "express";
declare class Controller {
    Register: (req: Request, res: Response, next: NextFunction) => void;
    Login: (req: Request, res: Response, next: NextFunction) => void;
    User: (req: Request, res: Response, next: NextFunction) => void;
}
declare const userController: Controller;
export default userController;
