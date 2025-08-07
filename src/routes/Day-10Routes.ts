import { register, login, showData,updateData,deleteData, adminLogin } from "../controllers/Day-10Controller";
import authMiddleware from "../Day-10/Middleware/Authentication";
import express from "express";
import { authorization } from "../Day-10/Middleware/Authorization";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/users",  authMiddleware, showData);

router.post("/admin-login", adminLogin);
router.get("/users/admin", authorization(["admin", "users", "manager"]), showData);

router.patch("/update/:id" , authorization(["admin"]) , updateData)

router.delete("/delete/:id" , authorization(["admin", "manager"]), deleteData )



export {router}