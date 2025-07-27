import { registerUserModel } from "../models/Day-10-model";
import bcrypt from"bcrypt"


export const createUser=async (data:{name:string, email:string, password:string})=>{
    const hashedPassword=await bcrypt.hash(data.password,10);
    return await registerUserModel.create({...data, password:hashedPassword});
}

export const findUser = async(email:string)=>{
    return await registerUserModel.findOne({email})

}

export const getUsers = async()=>{
    const data= await registerUserModel.find();
    return data;
}