import { userData } from "../scripts/user";
import { Request, Response } from "express";
import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().min(5).max(20).required(),
  age: Joi.number().required(),
  gender: Joi.string().required(),
});

const userController = async (req: Request, res: Response) => {
  try {
    const validateUser = userSchema.validate(req.body);
    if (validateUser.error) {
      return res
        .status(400)
        .json({ message: validateUser.error.details[0].message });
    }

    const data= await userData(req.body);
    res.status(202).json({message:"user created successfully",data})
  } catch (error) {
      res.status(500).json({ error: error });
    
  }
};
export default userController;
