import { Request, Response, NextFunction } from "express";
import Log from "../console/color.console";

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
   
  Log.red(`Error: ${error.message}`);

  const message= error.message || "Internal Server Error"

  res.status(500).json({
    success: false,
    message
  });
};

export default errorHandler;