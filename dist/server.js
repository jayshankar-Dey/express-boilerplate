"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const color_console_1 = __importDefault(require("./console/color.console"));
dotenv_1.default.config();
const app = (0, express_1.default)();
////use middlewares
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//test route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "success",
    });
});
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    color_console_1.default.green(`server is starting on port http://localhost:${PORT}`);
});
