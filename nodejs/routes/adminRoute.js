import express from "express"
import { InitAdmin } from "../controller/adminController.js"

const route = express.Router()


route.get("/admin", InitAdmin)

export default route;