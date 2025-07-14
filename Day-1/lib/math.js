//Create four methods: add(num1, num2), sub(num1, num2), mult(num1, num2), and div(num1, num2),
//  which perform addition, subtraction, multiplication, and division, respectively in math.js. 
// Utilize the lodash dependency for executing the aforementioned operations. Export all the above methods to make them accessible in any file.




const lod = require("lodash");

const add = (num1, num2) => {
  return lod.add(num1, num2);
};

const sub = (num1, num2) => {
  return lod.subtract(num1, num2);
};

const mul = (num1, num2) => {
  return lod.multiply(num1, num2);
};

const div = (num1, num2) => {
  return lod.divide(num1, num2);
};

module.exports= { add, sub, mul, div };

