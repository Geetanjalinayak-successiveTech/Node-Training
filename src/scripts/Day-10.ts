import { registerUserModel } from "../models/Day-10-model";
import bcrypt from "bcrypt";

export const createUser=async (data:{name:string, email:string, password:string})=>{
    const hashedPassword= bcrypt.hash(data.password,10);
    return await registerUserModel.create({...data, password:hashedPassword});
}

export const findUser = async (email: string) => {
  return await registerUserModel.findOne({ email });
};

export const getUsers = async () => {
  const data = await registerUserModel.find();
  return data;
};

export const updateUser = async (
  id: string,
  update: { name?: string; email?: string }
) => {
  return await registerUserModel.findByIdAndUpdate(id, update, { new: true });
};

export const deleteUser = async (id: string) => {
  return await registerUserModel.findByIdAndDelete(id);
};

