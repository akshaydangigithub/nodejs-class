import express from "express"
import { getAllUser, updateUser , deleteUser} from "../controller/userController.js";
import IsAuthUser from "../middlewares/AuthMidleware.js";

const route = express.Router();

route.get("/getAlluser", getAllUser);

route.put("/update", IsAuthUser, updateUser)

route.delete("/delete-user", IsAuthUser, deleteUser)

export default route