import { Request, Response, NextFunction } from "express";
import { Express } from "express";

export default function customMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(
    `TimeStamp:${new Date().toLocaleString()} , Method: ${req.method}, URL: ${
      req.originalUrl
    }`
  );
  next();
}
