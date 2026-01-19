import express from "express"
import { sendTestMail } from "../controller/nodemailerController.js";

const route = express.Router();

route.post("/send", sendTestMail)


export default route