import { Request, Response, NextFunction } from "express";

export function customHeader(headerName: string, headersValue: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    res.setHeader(headerName, headersValue);
    console.log(`${headerName}, ${headersValue}`);

    next();
  };
}
