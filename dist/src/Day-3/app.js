"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./middlewares/auth"));
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_2 = require("./middlewares/auth");
const userData_1 = require("../utils/userData");
const customMiddleware_1 = __importDefault(require("./middlewares/customMiddleware"));
const errorHandling_1 = require("./middlewares/errorHandling");
const middlewareChaining_1 = require("./middlewares/middlewareChaining");
const customHeader_1 = require("./middlewares/customHeader");
const rateLimiter_1 = __importDefault(require("./middlewares/rateLimiter"));
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(customMiddleware_1.default);
app.use((0, customHeader_1.customHeader)("XYZ-App", "1.0.0"));
app.post("/addUser", (req, res) => {
    const { id, name, email } = req.body;
    const newUser = {
        id,
        name,
        email,
    };
    const token = jsonwebtoken_1.default.sign(newUser, auth_2.secret_key, { expiresIn: "1h" });
    userData_1.users.push(newUser);
    res.json({ token });
});
app.get("/getUsers", auth_1.default, (req, res) => {
    //res.json({ message: "Token Verified" });
    res.json(userData_1.users);
});
app.get("/users", (req, res) => {
    res.json(userData_1.users);
});
app.post("/post", (req, res) => {
    const { name, email } = req.body;
    const nu = {
        id: userData_1.users.length + 1,
        name,
        email,
    };
    userData_1.users.push(nu);
    res.json(userData_1.users);
});
app.get("/error-test", (req, res) => {
    throw new Error("This is a test error!");
});
app.use(middlewareChaining_1.middleware1, middlewareChaining_1.middleware2, middlewareChaining_1.middleware3).get("/chaining", (req, res) => {
    res.send("This is middleware chaining");
});
app.get('/reqLimit', (0, rateLimiter_1.default)(2), (req, res) => {
    res.send("Hello");
});
app.use(errorHandling_1.errMiddleWare);
app.listen(port, () => console.log(`port started at ${port}`));
