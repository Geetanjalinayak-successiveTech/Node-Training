import { Request,Response,NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";


//interface for authentication middleware
export interface AuthenticatedReq extends Request {
  token?: string | JwtPayload;
}

//inteface for custom header middleware
export interface CustomHeader {
    (req:Request,res:Response,next:NextFunction):void;
  
}

//interface for custom middleware

export interface customMiddleware
{
    (req:Request,res:Response,next:NextFunction):void;
}



// interface for customError
export interface CustomErrorMiddleware {
  (err: Error, req: Request, res: Response, next: NextFunction): void;
}


// interface for rate limiter middleware
export interface rateLimiterInterface {
  ( req: Request, res: Response, next: NextFunction): void;
}

export interface ICommonInterface{
  ( req: Request, res: Response, next: NextFunction): void;

}
