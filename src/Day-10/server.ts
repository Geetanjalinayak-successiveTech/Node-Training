import dotenv from "dotenv";
dotenv.config();

console.log("SECRET KEY:", process.env.SUPER_SECRET_KEY);


import ConnectDB from "../config/UserDB";

import app from "./app";

const port = 6000;

const startServer = async () => {
  await ConnectDB();
  app.listen(port, () => {
    console.log(`port started at ${port}`);
  });
};

startServer();
