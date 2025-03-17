import express, { Request, Response } from "express";
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv"
import Log from "./console/color.console";

dotenv.config()

const app=express()


////use middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())


//test route
app.get("/", (req: Request, res: Response) => {
       res.json({
         success: true,
         message: "success",
       });
});


const PORT=process.env.PORT ||7000

app.listen(PORT,()=>{
      Log.green(`server is starting on port http://localhost:${PORT}`)
})



