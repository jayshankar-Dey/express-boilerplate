"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const DB_connection_1 = require("./db/DB.connection");
const errorHendler_middlewares_1 = __importDefault(require("./middlewares/errorHendler.middlewares"));
const user_router_1 = __importDefault(require("./routes/user.router"));
dotenv_1.default.config({});
const app = (0, express_1.default)();
exports.app = app;
////use middlewares
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//connect DB
const URL = process.env.DB || "mongodb://localhost:27017/";
(0, DB_connection_1.connectDB)(URL);
//test route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "success",
    });
});
///use routes
app.use('/api/v1', user_router_1.default);
///use error hendler middleware
app.use(errorHendler_middlewares_1.default);
