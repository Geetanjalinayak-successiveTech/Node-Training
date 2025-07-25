import { Request, Response, NextFunction } from "express";
import { customMiddleware } from "../../Interfaces/UserInterface";

export default class CustomMiddleware{
public custom:customMiddleware= (
  req: Request,
  res: Response,
  next: NextFunction
)=> {
  console.log(
    `TimeStamp:${new Date().toLocaleString()} , Method: ${req.method}, URL: ${
      req.originalUrl
    }`
  );
  next();
}
}
