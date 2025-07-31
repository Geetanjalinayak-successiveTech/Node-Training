import dotenv from "dotenv";
dotenv.config();

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
