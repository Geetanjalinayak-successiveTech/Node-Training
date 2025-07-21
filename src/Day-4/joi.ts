const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

const userData={
    username: "Geetanjali17",
    email:"geetagmail.com",
    password:"password1234"
}

const validationUser= userSchema.validate(userData);

if (validationUser.error) {
  console.error('Validation error:', validationUser.error.message);
} else {
  console.log('Valid data:', validationUser.value);
}

