"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = customMiddleware;
function customMiddleware(req, res, next) {
    console.log(`TimeStamp:${new Date().toLocaleString()} , Method: ${req.method}, URL: ${req.originalUrl}`);
    next();
}
