import authentication from "../Day-3/middlewares/auth";
import express from "express";
import Jwt from "jsonwebtoken";
import { secret_key } from "../Day-3/middlewares/auth";
import { Request, Response } from "express";

const port = 5000;
const app = express();

app.use(express.json());

app.post("/addUser", (req: Request, res: Response) => {
  const { userName, email } = req.body;
  const newUser = {
    userName,
    email,
  };

  const token = Jwt.sign(newUser, secret_key, { expiresIn: "1h" });

  res.json({ token });
});

app.get("/getUsers", authentication, (req, res) => {
  res.json({ message: "Token Verified" });
});

app.listen(port, () => console.log(`port started at ${port}`));
