import express from "express"
import dotenv from "dotenv"
import ConnectDb from "./model/db.js";
import authRoutes from "./routes/authRoute.js"
import userRoutes from "./routes/userRoute.js"
dotenv.config()

const PORT = process.env.PORT

const app = express();

app.use(express.json())

ConnectDb()


// ================ ALL ROUTES ================

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)


app.listen(PORT, ()=>{
    console.log(`Your server is listning on ${PORT}`);
    
})
