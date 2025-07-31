import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const url=process.env.MONGO_DB_URI as string
    await mongoose.connect(url);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

export default ConnectDB
