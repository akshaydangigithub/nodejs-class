import express from "express"
import dotenv from "dotenv"
import ConnectToDb from "./model/connect.js";
import userRoute from "./routes/userRoute.js"
import adminRoute from "./routes/adminRoute.js"
dotenv.config()

const app = express();
const PORT = process.env.PORT

app.use(express.json())

ConnectToDb()

// all routes
app.use(userRoute)
app.use(adminRoute)


// server listning
app.listen(PORT, function(){
    console.log(`Your server is listning on port ${PORT}`); 
})