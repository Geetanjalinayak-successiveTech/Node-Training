import { Request,Response,NextFunction } from "express";




export function  customHeader(headerName:string , HeadersValue:string)
{  return (req:Request, res:Response,next:NextFunction)=>{
    res.setHeader(headerName,HeadersValue);
    console.log(`${headerName}, ${HeadersValue}`);
    
    next();
}
}