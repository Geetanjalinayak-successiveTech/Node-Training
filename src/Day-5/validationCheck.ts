const express = require("express");
const createError = require("http-errors");
import { Request, Response, NextFunction } from "express";
import { HttpError } from 'http-errors';


const app = express();
const port = 3000;

app.post("/", (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  if (!username || typeof username !== "string") {
    return next(createError(400, "Username is required and must be a string"));
  }

  if (!password || password.length < 6) {
    return next(createError(400, "Password must be at least 6 characters"));
  }

  res.json({message:"Valid User"})
});

//page not found error
app.use((req:Request,res:Response,next:NextFunction)=>{
    next(createError(404,"Page not found"))
})

//  Centralized error handler
app.use((err:HttpError, req:Request, res:Response, next:NextFunction) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      status: err.status || 500,
    },
  });
});


app.listen(port, () => {
  console.log('Server is running on port 3000');
});
