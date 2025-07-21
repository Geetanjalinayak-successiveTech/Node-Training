import { Request,Response,NextFunction } from "express";

// const requestCounts = new Map<string, number>();

// export default function rateLimiter(maxRequest:number)
// {
//      return (req: Request, res: Response, next: NextFunction) => {
//     const ip= req.ip ||"unknown";

//     const count = requestCounts.get(ip) || 0;

//     if (count >= maxRequest) {
//       return res.status(429).json({
//         message: "Request limit exceeded. Access denied.",
//       });
//     }

//     requestCounts.set(ip, count + 1);
//     next();
//   };
// }


const requestCounts=new Map<string,number>();

export default function rateLimiter(maxRequest:number)
{
    return (req:Request,res:Response,next:NextFunction)=>{
        const ip=req.ip || "unknown";

        const count= requestCounts.get(ip) ||0;

        if(count>=maxRequest)
        {
            return res.status(429).json({message:"Maximum limit reached"})
        }

        else{
            requestCounts.set(ip,count+1);
            next();
        }

    }
}