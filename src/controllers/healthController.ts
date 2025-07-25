import { IhealthController } from "../Interfaces/IhealthController";
import { Request,Response,NextFunction } from "express";


export class healthController implements IhealthController{
    public checkHealth(req: Request, res: Response): void {
        res.status(202).json({staus:"OK" , message:"Server is up"})
    }
}