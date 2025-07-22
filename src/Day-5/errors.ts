const express= require("express")
const createError= require("http-errors")
import { Request,Response,NextFunction } from "express";
const port=3000;


const app= express();

app.use(express.json())

//route

app.get('/', (req:Request,res:Response)=>{
    res.send("Hello")

})

//error middleware

app.use((req:Request, res:Response, next:NextFunction) => {

  next(createError(404, 'Not Found'));

});

app.listen(port, () => {

  console.log(`Server is running on port ${port}`);

});