import { Request, Response, NextFunction } from "express";
import  Jwt  from "jsonwebtoken";

const authorization = (roles:string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(400).json({message:"Token not found"})
    }

    try {

        const decode= Jwt.verify(token, process.env.SUPER_SECRET_KEY!);
        (req as any).user= decode 
        const user= (req as any).user;

        if(!roles.includes(user.role))
        {
            res.status(400).json({message:"Access Denied"})
        }
        next();
        
    } catch (error) {

        res.status(400).json({message:"Something went wrong", error})
        
    }
  };
};


export {authorization}
