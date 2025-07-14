import { Router } from "express";
import {usersubcontroller ,feedbacktofront }from "../controller/usercontroller.js";
const userrouter = Router();


userrouter.post("/form",usersubcontroller);
userrouter.get("/form",feedbacktofront);




export  default userrouter;