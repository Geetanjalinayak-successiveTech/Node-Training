import { Request,Response } from "express";

export interface IhealthController
{
    checkHealth(req:Request,res:Response):void;
}