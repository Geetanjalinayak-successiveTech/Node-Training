"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customHeader = customHeader;
function customHeader(headerName, HeadersValue) {
    return (req, res, next) => {
        res.setHeader(headerName, HeadersValue);
        console.log(`${headerName}, ${HeadersValue}`);
        next();
    };
}
