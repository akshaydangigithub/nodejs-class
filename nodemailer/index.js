import express from "express"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT;

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.get("/", (req, res)=>{
    res.send("Hello ")
})

// ===================== ROUTES ==================

import nodeMailerRoute from "./routes/nodemailerRoute.js"

app.use(nodeMailerRoute)


app.listen(PORT, ()=>{
    console.log(`Your app is running on PORT ${PORT}`);
    
})
