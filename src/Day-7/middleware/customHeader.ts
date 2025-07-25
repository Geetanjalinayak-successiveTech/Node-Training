import { Request, Response, NextFunction } from "express";
import { CustomHeader } from "../../Interfaces/UserInterface";


export default class customHeader{
public header=(headerName: string, headersValue: string):CustomHeader=> {
  return (req: Request, res: Response, next: NextFunction) => {
    res.setHeader(headerName, headersValue);
    console.log(`${headerName}, ${headersValue}`);

    next();
  };
}
}
