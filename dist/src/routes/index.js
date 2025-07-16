"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("../Day-3/middlewares/auth"));
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_2 = require("../Day-3/middlewares/auth");
const port = 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/addUser", (req, res) => {
    const { userName, email } = req.body;
    const newUser = {
        userName,
        email,
    };
    const token = jsonwebtoken_1.default.sign(newUser, auth_2.secret_key, { expiresIn: "1h" });
    res.json({ token });
});
app.get("/getUsers", auth_1.default, (req, res) => {
    res.json({ message: "Token Verified" });
});
app.listen(port, () => console.log(`port started at ${port}`));
