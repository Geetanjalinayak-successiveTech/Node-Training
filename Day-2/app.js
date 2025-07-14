const express= require("express");
const mockData= require("./mockData")
const port =3001;

const app=express();




app.get('/' , (req,res)=>{
    res.send(mockData);

})

app.listen(port , ()=>{
    console.log("Data fetch sucessfully");
    
})