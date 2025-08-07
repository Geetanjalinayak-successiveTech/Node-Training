import ConnectDB from "../config/UserDB";
import { userModel } from "../models/Day-13.mode";
import { data } from "../utils/AggregrationMockData";


const seedUsers = async () => {
  await ConnectDB();
  await userModel.deleteMany({});
  await userModel.insertMany(data);
  console.log("user data seeded");
  process.exit(0);
};

seedUsers();