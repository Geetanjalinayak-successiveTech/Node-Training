import { Request,Response,NextFunction } from "express";


export default function Validation(req:Request, res:Response, next:NextFunction)
{
    const {email,password}= req.body;

    if(!email  || typeof(email)!=="string" || email.includes("@"))
    {
        return res.status(400).json({message:"email is invalid"})
    }

    if(!password || typeof password!=="string" || password.length<8)
    {
        return res.status(400).json({message:"Invalid password"})
    }

    next();
}
