import { Request, Response, NextFunction } from "express";
import { ICommonInterface } from "../../Interfaces/UserInterface";


export default class form{
public formValidation:ICommonInterface=(
  req: Request,
  res: Response,
  next: NextFunction
) =>{
  const { username, password, email } = req.body;

  if (!username || typeof username !== "string" || username.trim().length < 3) {
    return res
      .status(400)
      .json({ message: "Invalid username. Minimum 3 characters required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== "string" || !emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
  if (
    !password ||
    typeof password !== "string" ||
    !passwordRegex.test(password)
  ) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters, include uppercase, lowercase, and a number.",
    });
  }

  next();
}
}
