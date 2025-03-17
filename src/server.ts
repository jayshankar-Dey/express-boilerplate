import { app } from "./app"
import Log from "./console/color.console"


const PORT=process.env.PORT || 8000

app.listen(PORT,()=>{
      Log.green(`server is starting on port http://localhost:${PORT}`)
})



