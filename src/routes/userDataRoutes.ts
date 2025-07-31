import express from "express";

import userController from "../controllers/Day-9Controller";



const router = express.Router();

router.post("/user", userController);

export default router;
