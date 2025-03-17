"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const color_console_1 = __importDefault(require("./console/color.console"));
const PORT = process.env.PORT || 8000;
app_1.app.listen(PORT, () => {
    color_console_1.default.green(`server is starting on port http://localhost:${PORT}`);
});
