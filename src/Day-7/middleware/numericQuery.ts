import { Request, Response, NextFunction } from "express";
import { ICommonInterface } from "../../Interfaces/UserInterface";


export default class param{
public queryParam:ICommonInterface=(
  req: Request,
  res: Response,
  next: NextFunction
)=> {
  const requiredQueryParams = ["page", "limit"];

  requiredQueryParams.map((param) => {
    const query = req.query[param];

    if(query!==undefined && isNaN(Number(query)))
    {
        res.status(400).json({message: `${param} must be a number`})
    }
  });

  next();
}
}
