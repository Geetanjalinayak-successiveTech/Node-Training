
import { Users } from "../models/country.model";

export const userData= async(data:{name:string, age:number, gender:string})=>{
   return Users.create(data);

}

