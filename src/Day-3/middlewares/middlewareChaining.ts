import { Request, Response, NextFunction } from "express";

export function middleware1(req: Request, res: Response, next: NextFunction) {
  console.log("This is middleware 1");
  next();
}

export function middleware2(req: Request, res: Response, next: NextFunction) {
  console.log("This is middleware 2");
  next();
}
export function middleware3(req: Request, res: Response, next: NextFunction) {
  console.log("This is middleware 3");
  next();
}

