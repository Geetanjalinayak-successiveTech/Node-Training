import Jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.token;
  if (!token) {
    res.status(400).json({ message: "token missing" });
  }

  try {
    const tokenDecode = Jwt.verify(token, process.env.SUPER_SECRET_KEY!);
    (req as any).user = tokenDecode;
    next();
  } catch (error) {
    res.status(400).json({ message: "Something wrong" });
  }
}
