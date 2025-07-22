const express= require("express")
const createError= require("http-errors")
import { HttpError } from 'http-errors';
import { Request,Response,NextFunction } from "express";


const app= express();
const port= 3000;


app.get("/async", async (req:Request, res:Response ,next:NextFunction )=>{

   try {
    throw new Error("Something went wrong")
    
   } catch (error) {
    next(error);
    
   }
})

app.use((req:Request,res:Response,next:NextFunction)=>{
    next(createError(404,"Page not found"));
})

app.use((err:HttpError, req:Request, res:Response, next:NextFunction) => {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});