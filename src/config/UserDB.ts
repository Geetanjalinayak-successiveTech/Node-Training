import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/registeruser");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

export default ConnectDB
