import { register, login, showData } from "../controllers/Day-10Controller";
import authMiddleware from "../Day-10/Middleware/Authentication";
import express from "express";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/users",  authMiddleware, showData);


export {router}