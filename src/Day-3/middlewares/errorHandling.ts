import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export const errMiddleWare = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).json({ message: "intrenal error" });
};
