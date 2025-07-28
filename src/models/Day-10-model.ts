import mongoose from "mongoose";

const registerUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role:{type:String , enum:["user", "admin", "manager"] , default:"user"}
});

export const registerUserModel = mongoose.model(
  "registerUserModel",
  registerUserSchema
);
