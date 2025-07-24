
import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  code: { type: String, required: true },
});

const Country = mongoose.model("Country", countrySchema);
export default Country;

// userSchema for assignment-9
const userSchema= new mongoose.Schema({
  name:{type:String, required:true},
  age:{type:String, required:true},
  gender:{type:String, required:true}
});

const Users= mongoose.model("users" , userSchema);
export {Users}