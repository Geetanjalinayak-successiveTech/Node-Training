import authentication from "./middlewares/auth";
import express from "express";
import Jwt from "jsonwebtoken";
import { my_secret_key } from "./middlewares/auth";
import { Request, Response } from "express";
import { users } from "../utils/userData";
import customMiddleware from "./middlewares/customMiddleware";
import { errMiddleWare } from "./middlewares/errorHandling";
import {
  middleware1,
  middleware2,
  middleware3,
} from "./middlewares/middlewareChaining";
import { customHeader } from "./middlewares/customHeader";
import rateLimiter from "./middlewares/rateLimiter";

const port = 8000;
const app = express();

app.use(express.json());
app.use(customMiddleware);
app.use(customHeader("XYZ-App", "1.0.0"));

app.post("/addUser", (req: Request, res: Response) => {
  const { id, name, email } = req.body;
  const newUser = {
    id,
    name,
    email,
  };

  const token = Jwt.sign(newUser, my_secret_key, { expiresIn: "1h" });
  users.push(newUser);

  res.json({ token });
});

app.get("/getUsers", authentication, (req, res) => {
  //res.json({ message: "Token Verified" });
  res.json(users);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/post", (req, res) => {
  const { name, email } = req.body;
  const nu = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(nu);
  res.json(users);
});

app.get("/error-test", (req, res) => {
  throw new Error("This is a test error!");
});

app.use(middleware1, middleware2, middleware3).get("/chaining", (req, res) => {
  res.send("This is middleware chaining");
});


app.get('/reqLimit',rateLimiter(2), (req,res)=>{
   res.send("Hello")
})

app.use(errMiddleWare);

app.listen(port, () => console.log(`port started at ${port}`));
