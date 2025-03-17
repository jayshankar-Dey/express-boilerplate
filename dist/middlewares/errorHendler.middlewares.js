"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_console_1 = __importDefault(require("../console/color.console"));
const errorHandler = (error, req, res, next) => {
    color_console_1.default.red(`Error: ${error.message}`);
    const message = error.message || "Internal Server Error";
    res.status(500).json({
        success: false,
        message
    });
};
exports.default = errorHandler;
