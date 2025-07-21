import Validation from "./middleware/validation";
import formValidation from "./middleware/form_Validation";

import Express from "express";

const app = Express();
const port = 3001;
app.use(Express.json());

app.post("/adduser", Validation, (req, res) => {
  const { email, password } = req.body;

  res.json({
    message: "user created successfully",
    users: { email, password },
  });
});

app.post("/form-post", formValidation, (req, res) => {
  const { username, email, password } = req.body;

  res.json({
    message: "Form validated successfully",
    userData: { username, email, password },
  });
});

app.listen(port, () => {
  console.log(`serever run at ${port}`);
});
