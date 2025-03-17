import express from 'express'
import {Application, Request, Response } from "express";
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv"
import { connectDB } from "./db/DB.connection";
import errorHendler from "./middlewares/errorHendler.middlewares";
import helmet from 'helmet';
import userRoute from './routes/user.router';
dotenv.config({})

const app:Application=express()

////use middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(helmet())

//connect DB
const URL=process.env.DB || "mongodb://localhost:27017/"
connectDB(URL)


//test route
app.get("/", (req: Request, res: Response) => {
       res.json({
         success: true,
         message: "success",
       });
});


///use routes
app.use('/api/v1',userRoute)

///use error hendler middleware
app.use(errorHendler)

export {app}