"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secret_key = void 0;
exports.default = authentication;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.secret_key = "my_secret_key";
function authentication(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Missing Token" });
    }
    const token = auth === null || auth === void 0 ? void 0 : auth.split(" ")[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, exports.secret_key);
        req.token = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
}
