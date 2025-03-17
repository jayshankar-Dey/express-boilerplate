import { Request, Response, NextFunction } from "express";

class Controller {
  //user register
  Register = (req: Request, res: Response, next: NextFunction) => {};

  //user login
  Login = (req: Request, res: Response, next: NextFunction) => {};

  //user get
  User = (req: Request, res: Response, next: NextFunction) => {};
}

const userController = new Controller();

export default userController;
