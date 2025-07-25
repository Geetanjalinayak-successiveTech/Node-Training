import { Request, Response } from "express";
import { users } from "../utils/userData";

export const getUser = (req: Request, res: Response) => {
  res.json({ name: "John Doe", role: "Admin" });
};

export const throwError = (req: Request, res: Response) => {
  throw new Error("This is a test error");
};

// for mock data seeding 
const userData= users;
export const mockData= (req:Request,res:Response)=>{
  res.json(userData)
}

