import { CustomErrorMiddleware } from "../../Interfaces/UserInterface";

export const errMiddleware: CustomErrorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
};