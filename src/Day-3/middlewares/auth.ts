import  { Request, Response, NextFunction } from "express";
import Jwt, { JwtPayload } from "jsonwebtoken";

export interface AuthenticatedReq extends Request {
  token?: string | JwtPayload;
}

export const secret_key = "my_secret_key";

export default function authentication(
  req: AuthenticatedReq,
  res: Response,
  next: NextFunction
) {
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing Token" });
  }

  const token = auth?.split(" ")[1]!;
  try {
    const decoded = Jwt.verify(token, secret_key);
    req.token = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
}
