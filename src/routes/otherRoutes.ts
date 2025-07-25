import { healthController } from "../controllers/healthController";
import { Request,Response,NextFunction, Router } from "express";
import express from "express";

const app= express();

const healthCheck= new healthController();
app.get("/health" , healthCheck.checkHealth )

