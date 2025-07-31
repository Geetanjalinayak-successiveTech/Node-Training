import { connectDB } from "../config/db";
import app from "./app";
const port = 3000;

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {console.log(`port started at ${port}`)});
};

startServer();
