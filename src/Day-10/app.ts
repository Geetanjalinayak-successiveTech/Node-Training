import { router } from "../routes/Day-10Routes";
import express from "express"
import cookieParser from "cookie-parser";


const app= express();
app.use(cookieParser())

app.use(express.json());

app.use("/api", router);

export default app
