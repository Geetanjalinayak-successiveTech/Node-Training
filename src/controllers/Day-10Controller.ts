import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import {
  createUser,
  findUser,
  getUsers,
  updateUser,
  deleteUser,
  
} from "../scripts/Day-10";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  try {
    const exitingUser = await findUser(req.body.email);
    if (exitingUser) {
      return res.status(400).json({ message: "User already exist" });
    }
    const newUser = await createUser(req.body);
    return res.status(201).json({ message: "User registered", user: newUser });
  } catch (error) {
    res.status(400).json({ message: "Failed", error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await findUser(req.body.email);
    if (!user) {
      return res.status(400).json({ meassage: "user does not exist" });
    }

    const pass = bcrypt.compare(req.body.password, user.password);
    if (!pass) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = Jwt.sign({ id: user.id }, process.env.SUPER_SECRET_KEY!, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.log(error);

    res.status(400).json({ meassage: "Something went wrong" });
  }
};

export const showData = async (req: Request, res: Response) => {
  try {
    const data = await getUsers();
    if (!data) {
      res.status(400).json({ message: "invalid user" });
    }
    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ meassage: "Something went wrong" });
  }
};

export const adminLogin = async(req:Request, res:Response)=>{
  try {
    const user = await findUser(req.body.email);
    if (!user) {
      return res.status(400).json({ meassage: "user does not exist" });
    }

    const pass =  bcrypt.compare(req.body.password, user.password);
    if (!pass) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = Jwt.sign({ id: user.id, role:user.role }, process.env.SUPER_SECRET_KEY!, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.log(error);

    res.status(400).json({ meassage: "Something went wrong" });
  }

}

export const updateData = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await updateUser(id, req.body);
    if (!data) {
      res.status(400).json({ message: "user not found" });
    }
    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ meassage: "Something went wrong" });
  }
};

export const deleteData = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedUser = deleteUser(id);
    if (!deletedUser) {
      res.status(400).json({ message: "user not found" });
    }

     res.status(200).json({ message:"user deleted successfully" });
    
  } catch (error) {
    res.status(400).json({ meassage: "Something went wrong" });
  }
};
