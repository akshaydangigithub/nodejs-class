import express from 'express';
import {  GetUser, LoginUser, RegisterUser } from '../controller/userController.js';

const router = express.Router();

router.post("/register", RegisterUser);

router.post("/login", LoginUser);

router.get("/getUser/:userId", GetUser)

export default router