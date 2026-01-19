import express from "express"
import { Init, RegisterUser, LoginUser, GetUserById } from "../controller/authController.js";
import IsAuthUser from "../middlewares/AuthMidleware.js";

const route = express.Router();


route.get("/init", Init)

route.post("/register", RegisterUser)

route.post("/login", LoginUser)

route.get("/me", IsAuthUser, GetUserById)


export default route