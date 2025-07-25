import express from "express";
import { Request, Response, NextFunction } from "express";
import { users } from "../utils/userData";
import { secret_key } from "../utils/config";
import Jwt from "jsonwebtoken";
import authentication from "../Day-7/middleware/auth";
import customHeader from "../Day-7/middleware/customHeader";
import CustomMiddleware from "../Day-7/middleware/customMiddleware";
import { getUser, throwError } from "../controllers/userController";
import rateLimiter from "../Day-7/middleware/rateLimiter";
import { mockData } from "../controllers/userController";
import form from "../Day-7/middleware/form_Validation";
import param from "../Day-7/middleware/numericQuery";

const app = express();
const my_secret_key = secret_key;

const auth = new authentication();

//authentication middleware route
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

app.get("/getUsers", auth.handle, (req, res) => {
  res.json(users);
});

//custom header middleware route
const custom= new customHeader()
app.use(custom.header("xyz","1.0.0"))


//custom middleware route
const customMid=new CustomMiddleware()
app.use(customMid.custom);


// routes for error middleware
app.get("/user", getUser);
app.get("/error", throwError);


//routes for rate Limiter
const rate= new rateLimiter
app.get("/ratelimit" , rate.limit(2), getUser )


app.get("/mockdata", mockData);

//route for form validation
const validForm= new form();
app.get("/form-validation", validForm.formValidation)




export default app;






